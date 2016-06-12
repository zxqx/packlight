# packlight

A gear awareness app for lightening your camping and backpacking load.

## Requirements

+ NodeJS

## Tech Stack

* [express](http://expressjs.com/) - Server HTTP framework
* [react](https://facebook.github.io/react/) - View layer
* [redux](https://github.com/reactjs/redux) - Frontend state management
* [sass](http://sass-lang.com/) - CSS preprocessor
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack](https://webpack.github.io/) - Module bundler
* [mocha](https://mochajs.org/) - Testing

## Setup

Install dependencies:

```sh
$ npm install
```

Start the server:

```sh
$ npm start
```

To run the server in release mode, set the environment variable `NODE_ENV=production`

## Test

Run tests:

```sh
$ npm test
```

Watch and re-run tests:

```sh
$ npm test:watch
```

## Release

Generate a release build in `dist`:

```sh
$ npm run build
```

## Roadmap

+ ~~Product search API integration~~
+ Category organization
+ Filter by category
+ Filter by brand
+ Filter by weight range
+ Create new list
+ lb -> kg conversion
+ ~~Remove gear item~~
+ Add custom gear item
+ Copy list
+ Share list
+ Clear list
+ Weight threshold
+ Weight analyzer
+ Gear suggestions
+ Create checklist
+ Quantity control
+ ~~User authentication~~
+ User creation
+ ~~Protected routes~~
+ Gear list persistence
+ ~~Circle CI integration~~
+ ~~Set up heroku deployment~~
+ Set up heroku stg and prod pipeline
