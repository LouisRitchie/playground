# React Refresh for SSR apps 2020

## This is a minimal example of [React Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) working for SSR apps.

If you are using webpack & want a dev environment where your browser automatically updates on code change, but you're not using [webpack-dev-server](https://github.com/webpack/webpack-dev-server), then this minimal example might help you.

It's challenging to implement __automatic updates to the browser on code change__ if your frontend server is more than a static server.
[Webpack dev server](https://github.com/webpack/webpack-dev-server) is the standard choice for simple React/Webpack projects; a plugin for automatic browser updates is included and it's simple to enable.
However, Webpack dev server is fundamentally just a static server, meaning that it is a zero-config server that accepts GET requests for resources & responds with those resources.
While there are a plethora of configuration options that can extend it, Webpack dev server is not a fully-featured server like [Express](https://expressjs.com).
A web developer who wants his React app to be crawlable by Google probably needs something like Express.
The problem with using Express as your development & production server is that you're not getting automatic browser updates out-of-the-box anymore. The problem is that you must use your noggin to implement it yourself.

To setup your Webpack-powered custom Express server to supply automatic browser updates, you need to apply these three packages to your project in the order they appear:

1. [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
    - This is middleware that you throw into your Express app to emulate the behaviour of Webpack dev server. It is required by the next package:
2. [Webpack Hot Middleware](https://github.com/webpack-contrib/webpack-hot-middleware)
    - This is middleware which sets up the client and server websocket connection. Once this is added, a websocket connection is ready for updates to be communicated.
3. [React Refresh Webpack Plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)
    - This is a Webpack plugin which uses that websocket connection to communicate what's changed in your React project. In other words, this adds automatic browser updates to your project.

Please open an issue if you have any trouble.

## How to implement SSR for my app?

Something something cargo cult something something spoon fed
