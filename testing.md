## Testing JavaScript Apps

Most apps should eventually have two sets of test suites: Unit tests, and functional tests.

Unit tests validate individual modules by testing the module's API surface. The best use case for a unit test is when a function maps from some inputs to some output in a predictable way:

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

In those cases, you can't assert against a specific value, so you should try to get a close approximation instead:

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

## Use 
