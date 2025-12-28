const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const fs = require("fs");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const mode = isDev ? "development" : "production";

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all",
        },
    };

    if (isProd) {
        config.minimizer = [
            // минимизирует css
            new CssMinimizerPlugin(),
            // минимизирует js
            new TerserWebpackPlugin(),
        ];
    }

    return config;
};
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const cssLoaders = (extra) => {
    const loaders = [
        {
            // для подключения css в отдельном файле
            loader: MiniCssExtractPlugin.loader,
            // для обновления изменений в  css без перезагрузки
            options: {
                //hmr: isDev,
                //reloadAll: true
            },
        },
        'css-loader',
        "postcss-loader",
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};
const babelOptions = (preset) => {
    const opts = {
        // для поддержки старого синтаксиса js
        presets: ["@babel/preset-env"],
        // для понимания синтаксиса классов
        plugins: ["@babel/plugin-proposal-class-properties"],
    };

    if (preset) {
        opts.presets.push(preset);
    }

    return opts;
};

const jsLoaders = (preset) => {
    const loaders = [
        {
            loader: "babel-loader",
            options: babelOptions(preset),
        },
    ];

    return loaders;
};

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            // если не укажем, то система будет создавать свой файл и подключать в него все что нужно
            template: "./index.html",
            // минификация указанного файла
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new Dotenv(),
        // для чистки лишних старых файлов, которые создавал webpack
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename("css"),
        }),
    ];

    return base;
};

module.exports = {
    // относительно какой папки смотрим
    context: path.resolve(__dirname, "src"),
    mode,
    // какой файл парсим
    entry: {
        main: ["@babel/polyfill", "./index.tsx"],
    },
    // куда кладем
    output: {
        filename: filename("js"),
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    resolve: {
        // для того, чтобы при подключении файлов не указывать расширения
        extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".json",
            ".png",
            ".jpg",
            ".json",
            ".scss",
            ".css"
        ],
        // Для удобства при подключении
    },

    watchOptions: {
        ignored: ["node_modules"],
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
        watchFiles: path.resolve(__dirname, "src", "index.html"),
        historyApiFallback: true,
    },
    devtool: isDev ? "source-map" : "eval",
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders("sass-loader"),
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][ext]",
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: "asset/resource",
                generator: {
                    filename: isDev
                        ? `assets/fonts/[name][ext]`
                        : `assets/fonts/[name].[hash][ext]`,
                },
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                //use: ["babel-loader", "eslint-loader"],
                use: "babel-loader"
            },
        ],
    },
};
