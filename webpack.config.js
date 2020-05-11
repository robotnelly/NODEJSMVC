const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill’,‘./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}






// require () es una llamada de función especial definida como parte de la especificación CommonJS.
// En el nodo, resuelve bibliotecas y módulos en la ruta de búsqueda de Nodo, ahora generalmente definida
// como node_modules en el mismo directorio
// (o el directorio del archivo JavaScript invocado) o la ruta de búsqueda de todo el sistema.
// En NodeJS podemos usar module exports para hacer nuestro código mas modular,
// y limpiar un poco nuestro archivo .js, los module exports funcionan como funciones,
// pero con archivos. Agrupan código que realiza cierta función y se puede importar en otro archivo donde se necesite