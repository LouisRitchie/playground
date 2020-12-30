const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const app = express();

const compiler = webpack({
  mode: 'development',
  entry: [
    '/home/louis/repos/playground/src/client.js',
    'webpack-hot-middleware/client',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
});
app.use(webpackDevMiddleware(compiler));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>webpack/express/webpack-dev-middleware playground</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="/main.js"></script>
</html>
`));

app.listen(3000, () => console.log('Playground is listening on port 3000'));
