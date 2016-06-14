# packlight

A gear awareness app for lightening your camping and backpacking load.

## Requirements

+ NodeJS

## Tech Stack

* [express](http://expressjs.com/) - Server HTTP framework
* [firebase](https://firebase.google.com) - Authentication & data persistence
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
$ npm run test:watch
```

## Release

Generate a release build in `dist`:

```sh
$ npm run build
```

## Roadmap

+ ~~Product search API integration~~
+ Category organization
+ ~~View gear list by URL~~
+ Gear box
+ Add new gear item
+ Create new list
+ Copy list
+ Clear list
+ Gear list persistence
+ Sign in anonymously
+ Loading indicators
+ Responsive styles
+ Quantity control
+ lb -> kg conversion
+ ~~Remove gear item~~
+ Gear suggestions
+ Create checklist
+ Share list
+ ~~User authentication~~
+ ~~User creation~~
+ ~~Protected routes~~
+ ~~Signup form validation~~
+ ~~Login form validation~~
+ Import from Excel
+ Import from LP
+ Export to CSV
+ Send password reset email
+ Reset password
+ Gear suggestions: Filter by category
+ Gear suggestions: Filter by brand
+ Gear suggestions: Filter by weight range
+ Weight analyzer
+ Get trip weather
+ ~~Circle CI integration~~
+ ~~Set up heroku deployment~~
+ Set up heroku stg and prod pipeline
