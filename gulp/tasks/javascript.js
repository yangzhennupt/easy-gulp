var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
	rename=require('gulp-rename'),
	config=require('../config').javascript;

	gulp.task('javascript',function(){
		return gulp.src(config.src)		
			   .pipe(uglify())
			   .pipe(rename({suffix:'.min'}))
			   .pipe(gulp.dest(config.dest));
	});