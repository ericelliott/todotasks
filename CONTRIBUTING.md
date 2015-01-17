Creating a New Example Implementation
============

Getting Started
---
1. [Fork this repo](https://github.com/ericelliott/todotasks/fork)

2. clone your fork and copy the `base` files
    ```
    # clone!
    git clone https://github.com/<your-fork>/todotasks.git
    # make a copy of the `base` implementation:
    cp -r todotaks/implementations/base todotasks/implementations/<your-build-process-name>
    # install dependencies
    cd todotasks/implementations/<your-build-process-name>
    npm install
    ```

3. Implement all the tasks listed below in your selected build process and link them to npm scripts of the same name  in `package.json`.

4. Update the `README.md` with detailed information about your task runner. See below for details.

5. Verify that your example covers all the below tasks by running this helper script:
    ```
    // TODO: create a script that will do some simple validation/sanity checking of examples... basically excercise all the npm scripts.
    ```
6. Commit your changes (preferably in a single revision) and push them to your fork.

7. Send a pull request for review.

Tasks
---
Your implementation example must implement all of the tasks below. Each task should be mapped to an `npm` script of the same name.

Example `package.json`:
```
{
  "name": "todotasks-template-gulp",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "clean": "gulp scrubadub"
    "lint": "gulp lintme",
    "compile-styles": "gulp dostyles",
    "compile": "gulp dojs",
    "build": "gulp doitall",
    "test": "gulp test",
    "dev": "gulp watchmystuff"
  },
  "author": "",
  "license": "ISC"
}
```

**clean**
Delete all files in the `dist` directory.

**lint**
Run *eslint* on all js files in the `js` directory.

**compile-styles**
Use *node-sass* to compile `bower_components/todomvc-common/*.css`and output to `dist/app.css`.

**compile**
Use *browserify* to generate `dist/app.js` from the file `js/app.js`. This should also use the *minifyify* plugin to minify the output.

**test**
Run tests from the `/test` directory.

**build**
This task should perform all of the above tasks in order. Note that this should use the implementations own internal task references.

**dev**
This is the most complicated task. It should watch `js` for changes. When a change is detected do the following:
    - Run *eslint* against all files in`js` and display any errors to *stdout*. Linting errors should not stop this task.
    - Rebuild the browserified file at `dist/app.js`. To make this task fast, strive to rebuild only what needs to be rebuilt.
    - Run the unit tests again.

This task should also watch for changes to `bower_components/todomvc-common/*.css` files and run *node-sass* to rebuild them on change.


README.MD
---
Every implementation should have a **README.MD** file with the following sections:

**Overview**
Explain the focus/goals of the implementation and include links to resources and tutorials.

**Required Components**
If there are any additional things required to use this task runner, state them here. This includes any globaly installed commands (example: `npm install grunt -g`) or other binaries.

**Highlights**
Describe all the things that this implementation is known for being *very good* at doing.

**Considerations**
Describe the tasks/situations not suited for this implementation. This should include any special cases, incompatiblities, or weak points that should be considered. It can be tough to point out the problems in the tools that you love, but please be as honest and objective as possible.
