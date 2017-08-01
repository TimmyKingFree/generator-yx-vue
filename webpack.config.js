var webpack = require('webpack'),
	path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');      //清除每次编译之后的缓存文件用

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist','units'),
		filename: 'bundle[chunkhash:8].js',
    	chunkFilename:'[id].[chunkhash:5].chunk.js'     //这里
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.js(x)*$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-0']
				}
			},
			{
				test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
        	test: /\.vue$/, 
        	options: {
        		babel: {
			      presets: ['es2015', 'stage-0']
			    }
         	}
       	}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./dist/lib/manifest.json')
		}),
		new HtmlWebpackPlugin({
	      // favicon:'./src/img/favicon.ico', //favicon路径
	      filename:__dirname+'/dist/index.html',  //生成的html存放路径，相对于 path
	      template:'./index.html',  //html模板路径
	      // title: '',
	      cache: true,
	      inject:true,  //允许插件修改哪些内容，包括head与body
	      hash:true,  //为静态资源生成hash值
	      minify:{  //压缩HTML文件
	       removeComments:true,  //移除HTML中的注释
	        collapseWhitespace:false  //删除空白符与换行符
	      }
	    }),
	    new CleanWebpackPlugin(
	      ['dist/units/*.js'],　 //匹配删除的文件
	      {
	          root: __dirname,       　　　　　　　　　　//根目录
	          verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
	          dry:      false        　　　　　　　　　　//启用删除文件
	      }
	    )
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		'NODE_ENV': JSON.stringify('development'), //development & production
		// 		// 'PUBLIC_PATH': JSON.stringify('http://127.0.0.1')
		// 	}
		// })
	]
}