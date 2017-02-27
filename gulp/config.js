var src = './src';
var dest = './build';

module.exports = {
    scss: {
        all: src + "/scss/**/*.scss",     //所有sass
        src: src + "/scss/**/*.scss",     //需要编译的sass
        dest: dest + "/assets/css",　　　 //输出目录     
    },
	html:{
		all: src+"/view/**/*.html",
		src: src+"/view/**/*.html",
		dest:dest
	},
	javascript:{
		all:src+"/js/**/*.js",
		src:src+"/js/**/*.js",
		dest:dest+"/assets/js"
	},
	img:{
		all:src+"/images/**/*.*",
		src:src+"/images/**/*.*",
		dest:dest+"/assets/images"
	},
	dest:dest
}