'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    spritesmith = require('gulp.spritesmith'),
    $ = require('gulp-load-plugins')();


gulp.task('styles', function() {
    return gulp.src([
            'src/styles/reset.scss',
            'src/styles/style.scss'
        ])
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded',
            errLogToConsole: false,
            onError: function(err) {
                return notify().write(err);
            }
        }))
        .on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 15 versions', 'Firefox >= 20', 'ie 8', 'ie 9'],
            cascade: true,  // 自动对齐
            remove: false   // 是否移除不必要的前缀
        }))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(notify({
            message: 'styles task complete'
        }))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({
            message: 'scripts task complete'
        }));
});


// 图片压缩
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe($.cache($.imagemin({          // 修改或新增的图片会被压缩
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(notify({
            message: 'Images task complete'
        }));
});


// // 雪碧图
// gulp.task('spritesmith', function(){
//     gulp.src('src/*.png')
//         .pipe(spritesmith({
//             imgName: 'sprite.png',     // 生成的图片
//             cssName: 'sprite.css',     // 生成的css
//             padding: 10,               // 图标间的距离
//             algorithm: 'binary-tree'   // 图标排序方式
//         }))
//         .pipe(gulp.dest('dist/assets/images'));
// });


gulp.task('clean', function(cb) {
    $.del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb);
});


// gulp serve
gulp.task('watch', ['sass'], function () {
    browserSync.init({
        server: '.'
    });
    // watch
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('index.html').on('change', browserSync.reload);
});


// gulp
gulp.task('default', ['watch']);
