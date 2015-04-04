var gulp = require('gulp');
var coffee = require('gulp-coffee');

var coffeeConfig = {
	arithSrc: "./lib/coffee/*.coffee",
	arithDest: "./lib/coffee_dest",
	arrUtilSrc: "./lib/coffee/arrUtil/*.coffee",
	arrUtilDest: "./lib/coffee_dest/arrUtil",
	rootPathFileSrc: "./*.coffee",
	rootPathFileDest: "./"
};

gulp.task('coffee_make', function () {
	gulp
		.src(coffeeConfig.arithSrc)
		.pipe(coffee())
		.pipe(gulp.dest(coffeeConfig.arithDest));
});

gulp.task('coffee_arrUtil_make', function () {
	gulp
		.src(coffeeConfig.arrUtilSrc)
		.pipe(coffee())
		.pipe(gulp.dest(coffeeConfig.arrUtilDest));
});

gulp.task('coffee_rootPathFile_make', function () {
	gulp
		.src(coffeeConfig.rootPathFileSrc)
		.pipe(coffee())
		.pipe(gulp.dest(coffeeConfig.rootPathFileDest));
});

gulp.task('default', ['coffee_make', 'coffee_arrUtil_make', 'coffee_rootPathFile_make']);
