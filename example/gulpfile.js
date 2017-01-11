'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    runSequence = require('run-sequence'),
    $ = require('gulp-load-plugins')();


gulp.task('styles', function() {
    return gulp.src([
            'src/styles/reset.scss',
            'src/styles/style.scss'
        ])
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'expanded',
            errLogToConsole: false,
            onError: function(err) {
                return $.notify().write(err);
            }
        }))
        .pipe($.sourcemaps.write())
        .on('error', sass.logError)
        .pipe($.autoprefixer({
            browsers: ['last 20 versions', 'Firefox >= 20', 'safari 5', 'opera 12.1', 'ie 8', 'ie 9', 'android 4','ios 6'],
            cascade: true,
            remove: true
        }))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.minifycss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe($.notify({
            message: 'styles task complete'
        }))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('default'))
        .pipe($.concat('index.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe($.notify({
            message: 'scripts task complete'
        }));
});


gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe($.notify({
            message: 'Images task complete'
        }));
});


gulp.task('clean', function(cb) {
    return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb);
});



gulp.task('watch', ['sass'], function () {
    browserSync.init({
        server: '.'
    });

    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('index.html').on('change', browserSync.reload);
});


gulp.task('default', ['clean'], function(cb) {
    runSequence(['styles', 'scripts', 'images'], ['watch'], cb);
});
