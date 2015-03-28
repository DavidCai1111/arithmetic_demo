var gulp = require('gulp');
var coffee = require('gulp-coffee');

var coffee_src = "./lib/coffee/*.coffee";
var coffee_dest = "./lib/coffee_dest";

gulp.task('coffee_make',function(){
	gulp
		.src(coffee_src)
		.pipe(coffee())
		.pipe(gulp.dest(coffee_dest));

});

gulp.task('default',['coffee_make']);