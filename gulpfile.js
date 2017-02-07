var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var historyApiFallback = require('connect-history-api-fallback');
var proxyMiddleware = require('http-proxy-middleware');
var cleanCSS = require('gulp-clean-css');

gulp.task('js', function() {
  return gulp.src(['./client/**.module.js', './client/**.config.js', './client/app/**/**.module.js', './client/app/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js', {newLine: ';'}))
    .pipe(babel({presets: ['es2015']}))
    .pipe(ngmin())
    .pipe(uglify({mangle: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./client/dist/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function () {
  return gulp.src('./client/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./client/dist'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
  return gulp.src(['./client/*.html'])
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', ['watch'], function() {
  var proxy = proxyMiddleware('/api', {target: 'http://127.0.0.1:8080'});
  browserSync.init({
    server: {
      baseDir:['./', './client']
    },
    middleware: [proxy, historyApiFallback()]
  });
});

gulp.task('watch', function () {
  gulp.watch(['./client/app.js', './client/app-routes.js', './client/app/**/**.module.js', './client/app/**/*.js'], ['js']);
  gulp.watch('./client/css/*.css', ['css']);
  gulp.watch(['./client/*.html', './client/**/*.html'], ['html']);
});

gulp.task('build', ['js', 'css']);

gulp.task('default', ['serve']);