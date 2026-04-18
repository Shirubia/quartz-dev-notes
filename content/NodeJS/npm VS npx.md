---
tags:
  - npm
  - npx
  - nodejs
---
* Source: [StackOverflow](https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm)

___
## [Introducing npx: an npm package runner](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)

**`NPM` - _Manages_ packages _but_ doesn't make life easy _executing_ any.  
`NPX` - A tool for _executing_ Node packages.**

> `NPX` comes bundled with `NPM` version `5.2+`  

`NPM` by itself does not simply run any package. It doesn't run any package as a matter of fact. If you want to run a package using NPM, you must specify that package in your `package.json` file.

When executables are installed via NPM packages, NPM links to them:

1. _local_ installs have "links" created at `./node_modules/.bin/` directory.
2. _global_ installs have "links" created from the global `bin/` directory (e.g. `/usr/local/bin`) on Linux or at `%AppData%/npm` on Windows.

[**Documentation you should read**](https://docs.npmjs.com/files/folders#executables)

---

# NPM:

One might install a package locally on a certain project:

`npm install some-package`

Now let's say you want NodeJS to execute that package from the command line:

`$ some-package`

The above will **fail**. Only **globally installed** packages can be executed by typing their name _only_.

To fix this, and have it run, you must type the local path:

`$ ./node_modules/.bin/some-package`

You can technically run a locally installed package by editing your `packages.json` file and adding that package in the `scripts` section:

```json
// Source - https://stackoverflow.com/a/52018825
// Posted by vsync, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-18, License - CC BY-SA 4.0

{
  "name": "whatever",
  "version": "1.0.0",
  "scripts": {
    "some-package": "some-package"
  }
}
```

Then run the script using [`npm run-script`](https://docs.npmjs.com/cli/run-script) (or `npm run`):

`npm run some-package`

---

# NPX:

`npx` will check whether `<command>` exists in `$PATH`, or in the local project binaries, and execute it. So, for the above example, if you wish to execute the locally-installed package `some-package` all you need to do is type:

`npx some-package`

Another **major** advantage of `npx` is the ability to execute a package which wasn't previously installed:

`$ npx create-react-app my-app`

The above example will generate a `react` app boilerplate _within_ the path the command had run in, and ensures that you always use the latest version of a generator or build tool without having to upgrade each time you’re about to use it.

---

### Use-Case Example:

`npx` command may be helpful in the `script` section of a `package.json` file, when it is unwanted to define a dependency which might not be commonly used or any other reason:

```json
// Source - https://stackoverflow.com/a/52018825
// Posted by vsync, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-18, License - CC BY-SA 4.0

"scripts": {
    "start": "npx gulp@3.9.1",
    "serve": "npx http-server"
}
```

Call with: `npm run serve`

---

### Related questions:

1. [How to use package installed locally in node_modules?](https://stackoverflow.com/q/9679932/104380)
2. [NPM: how to source ./node_modules/.bin folder?](https://stackoverflow.com/q/18033754/104380)
3. [How do you run a js file using npm scripts?](https://stackoverflow.com/q/32964900/104380)