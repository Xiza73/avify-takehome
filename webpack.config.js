const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const { TanStackRouterWebpack } = require("@tanstack/router-plugin/webpack");

const host = "localhost";
const port = 8080;

module.exports = (_env) => {
  return {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    target: "web",
    entry: {
      app: ["./index.tsx"],
    },
    output: {
      filename: "[name]-[contenthash:6].bundle.js",
      path: path.join(__dirname, "./build/www"),
      // publicPath: `http://${host}:${port}/`,
    },
    resolve: {
      mainFields: ["browser", "module", "main"],
      extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.([jt])s(x?)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: "file-loader?name=img/[name]-[contenthash:6].[ext]",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name]-[contenthash:6].css",
        chunkFilename: "[id].css",
      }),
      TanStackRouterWebpack({ target: "react", autoCodeSplitting: true }),
      new Dotenv(),
    ],
    devServer: {
      port,
      host,
      static: path.resolve(__dirname, "src"),
      proxy: {
        "/api": {
          target: "https://api.carbonintensity.org.uk",
          secure: false,
          changeOrigin: true,
          pathRewrite: { "^/api": "" },
        },
      },
    },
  };
};
