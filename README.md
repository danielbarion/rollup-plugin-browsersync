The browser will be opened only when the entire bundle process is complete and the files are saved.

This rollup plugin are inspired by [4lejandrito browsersync plugin](https://github.com/4lejandrito/rollup-plugin-browsersync).

# rollup-plugin-browsersync
Serve your bundle via Browser Sync

## Installation
```
npm install --save-dev rollup-plugin-browsersync
```

## Usage
```js
// rollup.config.js
import browsersync from 'rollup-plugin-browsersync'

export default {
  input: 'entry.js',
  output: {
    file: 'bundle.js'
  },
  plugins: [
    browsersync({
      server: 'build', // serve the `build` folder
      watch: true,
      port: 3000,
      ui: {
        port: 3001,
      },
    }),
  ]
}
```

### Options

See [Browsersync options](https://browsersync.io/docs/options).

By default:
```js
{
    server: '.'
}
```

## Contributing

Contributions and feedback are very welcome.
