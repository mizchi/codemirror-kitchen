# CodeMirror Kitchean

## What's this?

Customised build of codemirror.

## Use

Fork and setup for your use case.

Build

```
$ npm install -g webpack
$ npm install
$ webpack
```

Take it.

```
<script src='/dist/bundle.js'></script>
```

## Load by webpack

Need this setting.

```
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.css$/   , loader: "style!css?root=." }
    ]
  },
```

I recommend bundled file via script.
