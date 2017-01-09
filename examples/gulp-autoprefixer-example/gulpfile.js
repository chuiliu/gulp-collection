var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function() {
    return gulp.src('src/style.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions', 'Firefox >= 20', 'safari 5', 'opera 12.1', 'ie 8', 'ie 9', 'android 4','ios 6'],
            cascade: true,  // 自动对齐
            remove: true    // 是否移除不必要的前缀
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
    gulp.watch('src/style.css', ['autoprefixer']);
});

gulp.task('default', ['autoprefixer', 'watch']);
