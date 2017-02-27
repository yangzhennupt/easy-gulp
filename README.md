#webpack简介
    webpack是一种当下比较火热的前端资源模块化管理和打包工具，前端开发所用到的几乎所有资源在webpack下面都可以当作模块来处理。
    通过loader的转换，你可以把CSS、JS、SASS等资源模块化，同时webpack提供了dv server 来帮助开发者进行本地环境的构建。
    下面就从安装开始，使用webpack做一个demo吧~
#安装
 由于webpack是依赖Node.js环境的，所以首先要安装 [Node.js](https://nodejs.org/en/download/%20%20nodejs%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80)，一路next，安装好后  打开cmd(windows下)，输入 `npm install webpack -g  `   -g这里代表了全局安装。
 
 由于npm服务在外国  所以这里推荐改用淘宝镜像 ，命令提示符执行 
`npm install cnpm -g --registry=https://registry.npm.taobao.org`  注意：安装完后查看其版本号`cnpm -v`，有提示则安装成功  cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm。
#开始入门

##npm init(项目的开始)
在任意磁盘目录下新建一个目录demo，在此路径下打开cmd，输入`npm init`  如下图，会让你输入一些作者信息、项目版本等等，可以一直按回车不填。

 ![这里写图片描述](http://img.blog.csdn.net/20170221092813136?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvQWtpbTBUbw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

然后你就会发现在目录下有一个package.json的文件，这个文件是管理项目依赖的，项目所依赖的环境都会以json的形式写入这个文件，当我们要在一个新环境搭建项目时，有了这个package.json，我们直接在项目目录下执行 `npm install`  那么就会自动安装项目的依赖。
##安装依赖
项目路径下执行 `npm install webpack --save-dev` 虽然已经在本地安装了全局的webpack，但是我们最好还是在项目路径下安装一下webpack,这样我们可以使用项目版本的webpack。以后我们所需要的依赖，也是以此方式安装  即   `npm install xxx --save-dev`
##目录结构
在demo路径下新建build文件夹 在里面新建一个index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Webpack Sample Project</title>
  </head>
  <body>
    <div id='root'>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```
在根目录创建src文件夹，分别在src里再建立images、js、scss文件夹。
在根目录下创建webpack.config.js。
这个就是webpack的配置文件，里面规定了入口文件，出口文件，加载的loader等等。
下面我们就以读取Json数据、使用sass、图片压缩为例子介绍整个webpack的配置。webpack是根据入口来找对应的模块，通过Loader转换之后输出到出口文件。

首先是整个webpack配置文件
![这里写图片描述](http://img.blog.csdn.net/20170221102222337?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvQWtpbTBUbw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

我们需要的依赖  "css-loader","file-loader","json-loader","node-sass", "sass-loader","style-loader","url-loader","webpack-dev-server"，依照上面的方法安装上面的依赖。
loader是按照从右至左的顺序执行的，比如scss文件，先由sass-loader处理，然后由css-loader处理，最后由style-loader处理。
然后在src下创建hello.json
```
{
  "greetText": "Hi there and greetings from JSON!"
}
```


在js目录下创建Greeter.js
```
var hello =require('../hello.json');  //引入json文件
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = hello.greetText;
  return greet;
};
```
scss目录下创建main.scss(我在images文件夹中用了一个图片)
```
html {
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background:blue;
  
  #root{
    color:red;
  }
  background:url(../images/1.jpg);
}
```

在js目录下创建入口文件main.js.
```
import '../scss/main.scss';  //导入scss文件
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
```

由于我们已经配置了webpack-dev-server 这会使webpack监听整个前端代码的变动并实时刷新，无需每次都要重新执行`webpack`命令。
在根目录执行`webpack-dev-server` 
打开浏览器输入 localhost:8080,神奇的事情发生啦。（请忽略它的丑）
![这里写图片描述](http://img.blog.csdn.net/20170221104025255?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvQWtpbTBUbw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

我们得到了json数据，并且scss文件也应用了，打开开发者工具 你会发现 我们的图片以base64的形式加载的，这样更省空间。
接着我们改动一下hello.json 并保存，你会发现页面会自动刷新一下，并且改动已经生效了！（webpack-dev-server 还有Hot Module Replacement   即 热模块模式   会异步的打包更改后的代码，并异步刷新浏览器 你并不会感觉到浏览器刷新了 ，但是它确实刷新了！`webpack-dev-server --inline --hot`  这个操作会增加打包后的js大小）

![这里写图片描述](http://img.blog.csdn.net/20170221104433147?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvQWtpbTBUbw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


webpack的魅力在于一切都可以模块化，而且有丰富的loader供你使用，大家一起来学习吧~


#结束语
这篇文章其实写的很粗糙,主要是讲了webpack的一些配置，它还有很多loader可以使用，大家可以根据情况自己配置。这是我第一篇文章， 希望大家多多支持，多多提意见，后面我会把它改动一些，让它更精美。
安装node环境后 执行`npm install` 即可添加所有依赖，谢谢大家，接下来我会抽时间写一片gulp教程，也是前端脚手架的环境搭配。然后也会有gulp+webpack搭配使用，敬请期待。
 
 
