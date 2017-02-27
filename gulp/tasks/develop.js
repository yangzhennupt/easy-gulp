var gulp=require('gulp'),
	runSequence=require('gulp-run-sequence'),
	config=require('../config');
	
	
	gulp.task('dev',function(){
		runSequence('scss','html','javascript','image','watch');
	});
		gulp.task('develop',function(){
		runSequence('scss','html','javascript','image','watch');
	});

