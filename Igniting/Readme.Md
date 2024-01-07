# Parcel

- build faster
- local server
- faster server
- caching
- remove un-used parts
- tree shaking
- lazy loading
- minification : reduce file size, whitespace and add short names.

# Key points

1. Package is a configuration of NPM.
2. NPM is a package manager tool, collect all package versions.
3. Create Parcel package for build our project in production mode.
4. Each folder have their own package, node_modules things for building.
5. Don't need to put those files on git that can be re-generate [node_modules, dist,.parcel].
6. // "main": "app.js", remove this file because it's knows as entry file in build environments.

# Theory Assignment:

### What is `NPM`?

- NPM is not a Node Package Manager, it's a package manager tool that handle all type of package we install in our server and keep their version as well

### What is `Parcel/Webpack`? Why do we need it?

- Parcel/webpack - All are used to build our project in production environments and help to improve the performance.

### What is `.parcel-cache`

- Parcel-cache : it's collect all changes that's happens in building, nd don't repeat the older changes. It's help to improve the building process.

### What is `npx` ?

- npx : it's a node package execution, it's used when we not install package in our system, and wants to use them.

### What is difference between `dependencies` vs `devDependencies`

- dependencies: it's important in dev or product as well. like(react)
- devDependencies : only useful for development phase. like( parcel)

### What is Tree Shaking?

- tree shaking means, remove unnecessary function that is not useful. the remove node called 'Dead Node'.

### What is Hot Module Replacement?

- HRM : it's update our building as soon as we change something in our project.

### List down your favorites 5 superpowers of Parcel and describe any 3 of them in your own words.

- 1. Local build server
- 2. faster building
- 3. collected all the caches
- 4. tree shaking
- 5. lazy loading

#### caches 👍:

save all the changes in caches file and not re-configure the old data.

#### tree shaking 👍:

    remove un-used data or variables.

#### lazy loading 👍:

    load data, only when user reached on it, it's helpful in image optimizations.

### What is `.gitignore`? What should we add and not add into it?

- it's used only when we don't push something into github. We should add there our important files and codes as a structure formant, not pushed those things that can we generate in every system like node_modules.

### What is the difference between `package.json` and `package-lock.json`

- package.json: handle all the packages with there versions. and help to create node_modules package by ```npm ci.
- package-lock.json : It collect all the packages versions details and lock them.

### Why should I not modify `package-lock.json`?

- We not need to modify this file because it have all packages details that we are using also it's depends on package json. And also, lock the packages.

### What is `node_modules` ? Is it a good idea to push that on git?

- It's play important role on our server, it's handel all tha packages. Their methods, in-build function all details.
- Never push node_modules because they can we re-install by package,json file, and also they have a large file size.

### What is the `dist` folder?

- dist: used for deploying our project in production mode. also they have optimize code.

### What is `browserlists`

- It's describe which browser you wants to support your web application, in any how.

<!-- ### Read about dif bundlers: vite, webpack, parcel

parcel is very useful for building our package on environment.
they have faster building process. -->

### Read about: ^ - caret and ~ - tilda

^ : change minor version as well and also change major versions & patches.
~ : only change the patches changes. Not minor and major.

### Read about Script types in html (MDN Docs)

- script have module type that helps to use import and export in our Javascript projects.
- Crossorigin helps to reduce cors error.
- async helps to load the script before the html parsing.
- defer helps to load html parsing than scripts that comes from the network.
