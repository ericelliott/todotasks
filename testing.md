# Testing JavaScript Apps

Most apps should eventually have two or three sets of test suites: Unit tests, integration tests, and functional tests.

**A note about examples:**

We'll be using ES6 syntax just for reading simplicity. `() =>` means `function`, `let` is block-scoped `var` (used here just to remind the reader that we're talking about ES6), and `(...args)` creates an `args` array containing all the arguments that follow the `...`.


## Unit Tests

Unit tests validate individual modules by testing the module's API surface. The best use case for a unit test is when a function maps from some inputs to some output in a predictable way. i.e.:

```
(a[, b, c...]) => d
```

Say you have a function that generates a sum of all inputs:

```js
let sum = (...args) => {
  let total = 0;
  while (args.length) {
    total += args.shift();
  }
  return total;
};
```

You might write a corresponding test like this:

```js
test('sum', (assert) => {
  assert.equal(sum(1, 2, 3), 6,
    'should return the sum of all inputs');

  assert.done();
});
```

In most applicaitons, there will be a handful of functions that are not pure (see the section on stateless functions from Chapter 2 of ["Programming JavaScript Applications"](https://ericelliottjs.com/product/programming-javascript-applications-paper-ebook-bundle/). For example, you may rely on a random number generator, a timestamp, or some other unpredictable input source. In those cases, assertions should test that outputs fall into some expected range:

```js
let stringTime = () => {
  return new Date().toString();
};
```

You can't assert against a specific value, so you should try to get a close approximation instead:

```js
test('stringTime', (assert) => {
  let
    t = stringTime(),
    a = t.split(' ');

  assert.equal(typeof a, 'string',
    'should return a string');

  assert.equal(a.length, 7,
    'string should contain required number of elements');

  assert.done();
});
```

Note that these are pretty minimal assertions. You could go crazy and make sure that each element is what you expect, but you should temper that based on the project's need for certainty and the likelihood that something might go wrong with the function.

If you need more complete coverage, write it. If you don't, factor in the need to keep the test suite maintainable.

For functions which create side-effects, such as writing output to a screen, database, log file, network, etc..., first, ask yourself if the function really needs to create side-effects. If it doesn't, make it stateless. If it does (some data actually does need to be written to a DB once in a while), there are a couple ways you can test.

First, if you can inject the dependency that is going to be written to by passing it into a parameter, that's ideal. Using that method, you could mock the dependency and run your assertions against the mock. An added benefit is that dependency injection can make your application more flexible.

If it's not something that can (or should) be easily mocked, perhaps the tests you need to write against that module should be integration tests, rather than unit tests.

If you're mocking and stubbing a lot of dependencies, or if your mocks / stubs start to cause you test maintenance headaches, it might be a sign that you should really be using integration tests.

For these examples, we'll use [tape](https://github.com/substack/tape) and [faucet](https://github.com/substack/faucet) for our unit test API and output.


## Integration Tests

Integration tests are written to ensure that component interactions behave appropriately. Take the example above where you may want to test that a module can properly interact with a datastore. One way to do that is to mock the datastore dependency and use unit tests.

Another approach is to actually connect to a real database and test that the database state gets updated appropriately when the module interacts with it. We're going to skip dedicated integration tests for this simple example code.

There is a superset of integration tests that may make a dedicated integration test suite unnecessary (depending on the needs of your particular app)... Functional tests.



## Functional Tests

Functional tests are designed to test the functionality of the application as a whole. A functional test starts from user stories like "as a user I want to log in so that I can access my account data". A functional test will typically mock user behavior instead of component behavior. In other words, it will generate UI interactions, and then test UI outputs and ensure that the app responds appropriately.

Since functional tests require the entire system to be operational in order to be trustworthy, functional tests are typically the most complex, and take the longest to run.

It's usually a really good idea to create a thorough enough functional test suite to ensure that all of the "happy path" user behaviors work appropriately. That means login / logout, checkout flows, and all of the essential operations a user may want to perform to derive value from your app.

For functional tests, Selenium Webdriver is the gold standard. We'll use [Nightwatch](http://nightwatchjs.org/) for a convenient webdriver API.
