var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
    return gulp.src('src/sass/style.scss')
        .pipe(plumber())  // sass编译失败时gulp任务不停止
        .pipe(sass({
            outputStyle: 'expanded',
            errLogToConsole: false
        }))
        .on('error', sass.logError)
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
