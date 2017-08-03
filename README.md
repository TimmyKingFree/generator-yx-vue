# Generator yx
Basic configuration has been completed base on Webpack and use NodeJS extended.
Later,will try to use Gulp and something extend this.

### Usage

```
npm install
webpack --config webpack.dll.config.js -p
npm start
open loaclhost:3000
```

Now edit `src/index.js` & `src/main.css`.  
Your changes will appear without refresh the browser.

### Packing

```
webpack --watch
webpack -p
node pack.js
```
Command `--watch` will repack the project when you change.  
Command `-p` will compress the bundle.    
`pack.js` It will copy a HTML file into dist folder. So, you can directly run the dist folder in static or any server.

### Dependencies
* webpack
* webpack-dev-server
* babel-loader
* nodejs


### 项目使用方法
* 首次启动webpack需要先进行打包，请在命令行中运行如下指令
	```
	 webpack --config webpack.dll.config.js -p
	 webpack(或者 npm start)
	```
* 当依赖项目包（vue等不是自己写的包）没有更新，或者没有添加新的包时，使用如下命令正常启动项目即可
	```
	 webpack(或者 npm start)
	```
* 当依赖项目包（vue等不是自己写的包）有更新或者添加了自己想使用的新包时，需要使用如下命令：
	```
	 webpack --config webpack.dll.config.js -p
	 webpack(或者 npm start)
	```