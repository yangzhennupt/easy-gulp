var gulp=require('gulp'),
	watch=require('gulp-watch'),
	config=require('../config');

	gulp.task('watch',function(){
		 watch(config.scss.all,function(){
			gulp.start('scss'); 
		 });
		 watch(config.html.all,function(){
			gulp.start('html'); 
		 });
		 watch(config.javascript.all,function(){
			gulp.start('javascript'); 
		 });
		 watch(config.img.all,function(){
			gulp.start('image'); 
		 });		 
	});