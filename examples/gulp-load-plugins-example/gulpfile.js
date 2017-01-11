var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// 压缩后重命名
gulp.task('rename', function() {
    return gulp.src('src/*.js')
        .pipe($.uglify({
            mangle: true,
            compress: true,
            preserveComments: 'all'
        }))
        .pipe($.rename({
            suffix: '.min'   // 后缀
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['rename']);
