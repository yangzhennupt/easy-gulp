var gulp=require('gulp'),
    htmlmin=require('gulp-htmlmin'),
	config=require('../config').html;

	gulp.task('html',function(){
		 return gulp.src(config.src)
		        .pipe(htmlmin())
				.pipe(gulp.dest(config.dest));
	});