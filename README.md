# TodoTasks

TodoMVC for task runners. Not sure which task runner to use? Take a look at some
reference implementations.

This repository is a base project for testing build tools in the [cloverfield
project](https://github.com/ericelliott/cloverfield/issues/2), based on the
[TodoMVC backbone
example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone).

## Getting Started

```bash
git clone https://github.com/ericelliott/todotasks.git
cd todotasks
npm install
```

## What's included

This repository should be all setup, ready for your build tool to compile:

 * `.eslintrc` contains the rules required for ESlint to pass
 * Upon `npm install`, all the bower components will automatically be installed
   also
 * No assumptions have been made about which build tool you are planning to use

## Motivation

> Cloverfield aims to create a next generation JavaScript project boilerplate.
> That means we'll use the tools that coders in-the-know will be using over the
> next 1 - 3 years. We're starting with the 2016 edition. Read more.
> 
> The JS community has been splintering when it comes to task runner consensus.
> For a while, Grunt was the clear winner, but that isn't the case anymore. We
> need to make a decision on one of these options, because many of our
> generators are going to produce some sort of task runner config. Please do
> some research and weigh in by answering the questions below.
> 
> Gulp and Brocolli have entered the community radar, and there is a growing
> trend to lean more heavily on Unix pipes instead of Node streams or the heavy
> file i/o typical of Grunt setups.
> 
> And the long-time reigning champion that's been a part of Unix since the time
> of the ancient grey beards is starting to make inroads. See Building
> JavaScript Projects with Make.
> 
> Oh, and npm has a built-in task runner that lets you easily leverage Unix
> pipes. Substack thinks that's the way to go, and he's not alone.
> 
> This is a pretty confusing landscape for those who haven't investigated all of
> these possible solutions, so lets try to lay out the pros and cons of each.

\- [Choosing a Task Runner for the Cloverfield Boilerplate
  Scaffold](https://github.com/ericelliott/cloverfield/issues/2)

## The challenge

> Let's clarify what our typical build system is trying to achieve:
> 
>  * Simple `dev` command that watches files for changes, then rebuilds *only what
>    needs to be rebuilt*
>  * Example that transpiles from ES6 or CoffeScript, configurable to do so with
>    or without sourcemaps
>  * Build CSS system with sprite generator
>  * Lint on build and display results in that dev command console output
>  * Run smoke tests on change
>  * Full build command that kicks off cross-platform testing (e.g. Sauce Labs
>    cloud testing)
>  * Am I missing anything?
> 
> ### What we really need is TodoMVC for build systems
> 
> Let's actually set up builds using the top contenders. Let's pick [the Backbone
> TodoMVC
> source](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone)
> (we're not actually building an app here, **this is an arbitrary, meaningless
> selection, no bikeshedding**) and whip up the contenders.
> 
> #### *If you care about build system x, write a TodoMVC build with x and link to it here.*
> 
> To make the timing meaningful, we should try to use all the same tech in all the
> contender build systems. These are arbitrary tech selections -- these do not
> reflect the tech we'll promote in Cloverfield. No bikeshedding about this stuff
> here, please. =)
> 
>  * ESLint with [these
>    rules](https://github.com/es-shims/es5-shim/blob/master/.eslintrc) (change
>    the rules if it doesn't pass, not the JavaScript source.)
>  * Concat JS and compress with [Uglify](https://www.npmjs.com/package/uglify-js)
>  * Run the CSS through [node-sass](https://www.npmjs.com/package/node-sass)
>  * Run a couple tests with [tape](https://github.com/substack/tape)
> 
> Since we're JavaScript guys, we can kick off the build process and time the
> results using JavaScript. We can worry about the exact timing code when we have
> a couple builds to compare.
> 
> Criteria for judging:
> 
>  * Build times with an emphasis on repeat builds - the longer it takes to build
>    during the dev process, the less productive developers are
>  * Ease of use *after the build system has been set up* - this includes simple
>    maintenance of the build config, e.g., how hard is it to add a task?
> 
> Note also, this isn't a spec race. We're all going to weigh in with our
> opinions, which are **informed by the somewhat-objective results.**
> 
> The fastest build is not an automatic winner, but it will help if we have some
> data backing our opinions up.
> 
> Let's get building. =)

\- [ericelliott](https://github.com/ericelliott/cloverfield/issues/2#issuecomment-68810309)
