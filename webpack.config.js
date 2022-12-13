const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

//exporta las configuraciones a utilizar en el build
module.exports = {
    //por defecto el módulo es production
    mode: 'development',

    output:{
        //limpia el contenido de la carpeta dist cuando se contruye el sitio
        clean: true
    },

    module:{
        rules: [
            {
              test: /\.html$/i,//para cada archivo html
              loader: "html-loader",//ejecute el loader de html
              options:{
                //si es true, cada elemento que sea cargable es importado
                sources: false,
              }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }
        ]
    },
    optimization:{},
    plugins: [
        //esta configuración sale del plugin https://github.com/jantimon/html-webpack-plugin#options
        new HtmlWebpackPlugin({
            title: 'Mi Webpack App',
            filename: 'index.html',
            //define la plantilla para generar la salida
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
            ],
        }),
    ],
}