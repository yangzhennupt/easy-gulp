#什么是codeEasy?

codeEasy是一个基于Gulp的前端自动化构建工具，它能够帮助前端开发人员更快的编辑代码，通过gulp的监视功能，能够实时监控文件的变化并进行更新。目前codeEasy支持html压缩，css压缩，sass，自动添加厂商前缀、精灵图，js压缩，后续将添加更多新功能，敬请期待...

##准备工作

首先你需要在本机安装node.js：https://nodejs.org/en/download/  

安装成功后，你可以去github克隆本项目。项目clone完毕后，在项目根目录打开CMD，然后我们将npm转换成淘宝镜像，输入以下命令 

``npm install -g cnpm --registry=https://registry.npm.taobao.org ``

以后用cnpm 代替npm命令即可。

##正式开始

在项目根目录打开cmd，输入``cnpm install``   即可自动安装本项目的依赖。

安装成功后，输入``gulp dev `` 开始构建，你会发现根目录在生成了build目录，然后 我们最好使用nginx来做为本地开发服务

nginx下载地址  http://nginx.org/en/download.html

下载好后，解压到磁盘中，打开/nginx/conf/nginx.conf，进行下面的修改nginx配置  

location / {  
            root   D:\codeEasy\build;              
            //这里项目填build目录              
            index  index.html index.htm;                         
  }  
  
修改完毕后，双击nginx.exe 你会发现界面一闪而过，然后打开浏览器，输入localhost/demo.html，如果看到Hello,codeEasy，恭喜你， 配置成功啦。

##一些注意点：

1.目录结构：项目代码放在src下面，html放在view里面，图标放在images里面，支持多级目录，注意引用时应该写build的路径，放入工作项目中只需要把build目录里面的代码放进去即可。

2.gulp会自动检测在src/images/下的图片，并生成精灵图，同时精灵图相关的样式sprite.css在/assets/images/目录下，比如有个图标被命名为‘subBtn’，那么该css类 就是  '.icon-subBtn'，自动生成的类已经定义了图标的宽高，如果你用一个行内元素，那么仅需要再加个类，让它变成block或inline-block即可。（具体可看demo.html）

3.生成的js文件是经过压缩的，会在原来的基础上加上后缀' .min'，引用js的时候需要注意。

4.不需要写厂商前缀，里面已经有插件帮我们做了。

5.如果你需要增加一些新功能，那么请在/gulp/tasks/下载自行编写任务，然后在watch.js,develop.js中添加相应的任务即可。

6.`gulp clean`命令能够帮助你删除build目录
