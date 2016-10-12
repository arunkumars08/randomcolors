var gulp = require('gulp');
var minifyjs = require('gulp-minify');
var minifycss = require('gulp-minify-css');

gulp.task('minifyCss', function () {
	return gulp	.src('css/*.css', {base: './css/'})
				.pipe(minifycss())
				.pipe(gulp.dest('dist/css'));
});

gulp.task('minifyJs', function () {
	return gulp	.src('js/*.js', {base: './js/'})
				.pipe(minifyjs())
				.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['minifyCss', 'minifyJs']);
gulp.watch('css/*.css', ['minifyCss']);