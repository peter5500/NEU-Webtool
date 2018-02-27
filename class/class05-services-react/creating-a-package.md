# Creating a Node package

Packages are collections of 1+ modules

A Module is a Node file 

Each Package will have a package.json in the root directory (the root directory of the package, not the system)

Having a package.json does NOT mean your file will be shared with the internet - it merely describes your package information and dependencies.  

## Package.json

You can create a new package.json by running `npm init`, which creates a basic example _in the current directory_.

Recall that package.json is JSON, so there are limitations to the format.

5 values are of particular importance:

## Package.json vital parts

### name

The name must be lowercase.  kebab-case is conventional.  While early packages included "node" in their name, that is generally avoided in current times.
The name is how your package will be addressed by other node files and npm.

### version

The version follows semver (https://semver.org/) standards.  It is a good practice to update the version of your packages whenever you deliver a new set of feature/changes.  In particular recall that versions less than 1.0.0 are assumed to not yet be ready for production use and so they will change APIs, change versions, and potentially break far more often.

### dependencies

This is a list of all the other node modules your package depends on to be used.  While you can manually edit this list, it is normally updated indirectly, via `npm install --save some-package`.  Recent versions of npm default to saving an installed package even without the --save flag.

The version string values represent the version of the module that is depended upon.  An exact version here indicates that specific version is required, while some prefix characters indicate a "this version or later" value, with different prefixes indicating the tolerance for change, such as accepting any patch versions higher than the listed value but not accepting higher minor versions vs accepting any minor/patch versions higher than the listed one but not accepting higher major versions, and so forth.

The biggest note about this is that running `npm install` with no module listed will instead install all the modules listed in dependencies and dev-dependencies, with the highest available version that matches the requirements listed in package.json.  Once it does so a lockfile is created that lists the exact versions used.  Subsequent `npm install` uses will install the exact versions in that lockfile rather than anything newer, even if newer is permitted by the lockfile. 

### dev-dependencies

Like dependencies, this indicates module dependencies.  Unlike dependencies, these are the modules required to _develop_ the package (modify it), not the requirements to _use_ the package.  For web work these are often the same, but the distinction matters for other modules.

### scripts

These hold system commands to execute when a shorthand command is issued via npm.  Some commands are built in to be expected, such as `npm start` or `npm test`, others have non-standard names, in which case you run them with `npm run script-name`.

## require() and module.exports

Node files can require other files.

This is done by saying either `require('module-name');` or `require('./path/to/files');`.
Normally node modules have a return value, so: `const someVarName = require('whatever');`

That return value can be any value, including a function.  

For a file to return a value when imported, you set `module.exports` to that value (`exports` is a different name for the same value).

That's it!  It is very, very easy to make a node file into a module that can be imported to others.

When require()ing, remember to include the relative path to the module.  Otherwise it will check for modules installed from npm, but not any of your files.


