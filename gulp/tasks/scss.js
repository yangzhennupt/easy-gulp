var gulp=require('gulp'),
    sass=require('gulp-sass'),
	autoprefix=require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	config=require('../config').scss;
	
	
	
	gulp.task('scss',function(){
	return gulp.src(config.src)
	        .pipe(autoprefix())
			.pipe(sass())
			.pipe(minifycss())
			.pipe(gulp.dest(config.dest));
	});