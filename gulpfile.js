var gulp = require('gulp');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('browserify', function() {
	gulp.src('src/js/main.js')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('jshint', function() {
	gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));

	gulp.src('src/styles/**/*.css')
		.pipe(gulp.dest('dist/styles'));

	gulp.src('src/assets')
		.pipe(gulp.dest('dist/assets'));
});

gulp.task('browser-sync', function () {
   var files = [
      'src/**/*.html',
      'src/js/**/*.js',
      'src/styles/**/*.css',
      'src/assets/fonts/*.*',
      'src/assets/img/*.*'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './dist'
      }
   });
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('jshint', ['jshint']);

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', ['default']);
});
