var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// 压缩后重命名
gulp.task('rename', function() {
    return gulp.src('src/*.js')
        .pipe(uglify({
            mangle: true,
            compress: true,
            preserveComments: 'all'
        }))
        .pipe(rename({
            // prefix: '',           // 前缀
            suffix: '.min',          // 后缀
            // extname: ".md"        // 文件后缀名
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['rename']);
