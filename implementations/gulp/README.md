# Gulp implementation

## Overview

This implementation is meant as a showcase of basic Gulp capabilities and styles for the Cloverfield project.

###Resources:
https://github.com/gulpjs/gulp


## Required Components

Gulp needs to be installed.

    npm install gulp -g


## Highlights
* Readability - The gulpfile.js is very easy to read. The pipe format scales the readability by essentially turning a chain of operations into a list. Aggregate tasks are intuitive.
* Scalability - Adding and removing tasks is easy.
* Familiarity - Gulpfiles are written in JavaScript.
* Parallel execution - Tasks that don't have any dependencies between themselves get executed simultaneously.


## Considerations
* There may arise a need for a functionality that is not covered by any plugin, which either means writing a new plugin or using a suboptimal solution (not having full stream and pipe support for the functionality, e.g. calling a shell script from gulp).
* Long task chains need to be carefully managed, such as when more than one task modifies the same files and they are not connected by a pipe.
* Sometimes sequential execution would be preferable to parallel execution but without an explicit dependency between tasks, this is not natively supported but through plugins (not an issue in the upcoming Gulp 4 release).
