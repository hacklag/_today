const {injectBabelPlugin} = require('react-app-rewired')
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function (config, env) {
  config.module.rules[1].oneOf[1].use.unshift({
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      presets: [["env", {modules: false}], "react"],
      plugins: [
        require.resolve("styled-jsx/babel")
      ]
    }
  })

  config = rewireReactHotLoader(config, env);

  return config
}
