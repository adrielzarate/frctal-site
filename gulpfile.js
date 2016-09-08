var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src',
];

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
  .pipe($.sass({
    includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
  .on('error', $.sass.logError))
  .pipe($.autoprefixer({
    browsers: ['last 2 versions', 'ie >= 9']
  }))
  .pipe(gulp.dest('css'));
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
    console.log('HTML !!!');
});

gulp.task('css', function () {
  gulp.src('*.css')
    .pipe(connect.reload());
    console.log('CSS !!!');
});


//gulp.task('default', ['sass'], function() {
//  gulp.watch(['scss/**/*.scss'], ['sass']);
//});

gulp.task('watch', function () {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['css/**/*.css'], ['css']);
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
 
gulp.task('default', ['connect', 'watch']);
