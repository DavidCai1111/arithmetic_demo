var gulp = require('gulp');
var coffee = require('gulp-coffee');

var coffee_src = "./lib/coffee/*.coffee";
var coffee_dest = "./lib/coffee_dest";
var coffee_arrUtilSrc = "./lib/coffee/arrUtil/*.coffee";
var coffee_arrUtilDest = "./lib/coffee_dest/arrUtil";

gulp.task('coffee_make',function(){
	gulp
		.src(coffee_src)
		.pipe(coffee())
		.pipe(gulp.dest(coffee_dest))
});

gulp.task('coffee_arrUtil_make',function(){
	gulp
		.src(coffee_arrUtilSrc)
		.pipe(coffee())
		.pipe(gulp.dest(coffee_arrUtilDest));
});

gulp.task('default',['coffee_make','coffee_arrUtil_make']);