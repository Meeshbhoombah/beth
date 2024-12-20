# Build Tools
Was considering Swarm for a datastore but realized the system was far from
necessary for what I'm building. Since I intend to run Chorable (currently) in
r2, I can just store the data locally in a server or filesystem of my choice.

## Todos
- [x] Install...
    + [x] react/react-dom
    + [x] webpack
    + [x] webpack-dev-server (dev)
    + [x] style-loader/css-loader
    + [x] babel-loader
    + [x] html-webpack-plugin (dev)
    + [x] react-hot-module
    + [x] webpack-merge (dev)
- [ ] Add boilerplate...
    + [ ] src/index.html
    + [ ] src/index.jsx
    + [ ] src/App.jsx
- [ ] Create webpack.base.config...
    + [x] extensions
    + [ ] Module aliases
    + [x] Plugins
        * [x] new webpack.NoEmit
        * [x] HTMLWebpackPlugin
        * [x] DefinePlugin (version)
- [ ] Create webpack.dev.config...
    + [x] webpack-merge
    + [ ] devtool
    + [ ] dev server
    + [ ] entry
        * [ ] react-hmr
    + [ ] Plugins
        * [ ] new webpackHMR
        * [ ] new webpack.namedModules

## Webpack
- [When and Why to use Webpack](https://blog.andrewray.me/webpack-when-to-use-and-why/)

### Loaders
**style-loader**
Add css to DOM by injecting a `<style>` tag.
- [Webpack Docs](https://webpack.js.org/loaders/style-loader/)

**css-loader**
Interpret `@import` and `url()`.
- [Webpack Docs](https://webpack.js.org/loaders/css-loader/)

**babel-loader**
Transpile ES6 and React to ES5 with `@babel/preset-env`.
- [Webpack Docs](https://webpack.js.org/loaders/babel-loader/)
- [Babel Usage Guide](https://babeljs.io/docs/en/usage)

### Plugins
**HTMLWebpackPlugin**
Automatically builds `index.html` with bundled assets
- [Webpack Docs](https://webpack.js.org/plugins/html-webpack-plugin/)

## References
- [react-spa-template](https://github.com/meetajhu/react-spa-template)
- [react-hot-loader-examples](https://github.com/gaearon/react-hot-loader/tree/master/examples/webpack-modern)
- [Alchemy Base Config](https://github.com/daostack/alchemy/blob/dev/webpack.dev.config.js)
- [Alchemy Dev Config](https://github.com/daostack/alchemy/blob/dev/webpack.dev.config.js)

