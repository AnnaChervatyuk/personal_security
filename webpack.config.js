const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },


  module: {
      rules: [
          {
            test: /\.scss$/,
            use:  [
              'style-loader',
              {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                      esModule: false,
                  },
              },
              'css-loader',
              'sass-loader'
            ]
          },
          {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              use: [
                     {
                       // loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]'
                       loader: 'file-loader?name=assets/fonts/webfonts/[name].[ext]'
                     },
                   ]
          },
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
          },
          {
            test: /\.(png|jpe?g|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'dist/img/',
                },
              },
            ],
          },
          {
            test: /\.svg$/i,
            include: /.*sprite\.svg/,
            use: [
                {
                    loader: 'svg-sprite-loader',
                    options: {
                        publicPath: '',
                    }
                },
            ],
        },
      ]
  },
  plugins: [
      new SpriteLoaderPlugin(),
      new CopyWebpackPlugin({
        patterns: [
            { from: 'src/public/images', to: 'images' },
            // { from: 'src/public/sprite.svg', to: '/' },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: 'app.css',
      }),
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      }),
      new HtmlWebpackPlugin({
        filename: 'theory.html',
        template: 'src/public/theory.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'safety.html',
        template: 'src/public/safety.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'article.html',
        template: 'src/public/article.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'todo.html',
        template: 'src/public/todo.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'first_page.html',
        template: 'src/public/first_page.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'search.html',
        template: 'src/public/search.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'situation.html',
        template: 'src/public/situation.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        template: 'src/public/about.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'profile.html',
        template: 'src/public/profile.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'course_not_started.html',
        template: 'src/public/course_not_started.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'course_ready.html',
        template: 'src/public/course_ready.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'course.html',
        template: 'src/public/course.html'
        }),
      new HtmlWebpackPlugin({
        filename: '404.html',
        template: 'src/public/404.html'
        }),

      new HtmlWebpackPlugin({
        filename: '500.html',
        template: 'src/public/500.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'login.html',
        template: 'src/public/login.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'email.html',
        template: 'src/public/email.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'instruction.html',
        template: 'src/public/instruction.html'
        }),
      new HtmlWebpackPlugin({
        filename: 'situation_inner.html',
        template: 'src/public/situation_inner.html'
        }),

      new HtmlWebpackPlugin({
        filename: 'exercise.html',
        template: 'src/public/exercise.html'
        }),

      new HtmlWebpackPlugin({
        filename: 'all_theory.html',
        template: 'src/public/all_theory.html'
        }),

      new HtmlWebpackPlugin({
        filename: 'old_link.html',
        template: 'src/public/old_link.html'
        }),



  ],



  devServer: {  // configuration for webpack-dev-server
      contentBase: './src/public',  //source of static assets
      port: 7700, // port to run dev-server
  }
};
