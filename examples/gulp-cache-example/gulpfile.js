var gulp = require('gulp'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin');

gulp.task('cache', function() {
    return gulp.src('src/*.png')
        .pipe(cache(imagemin({
            progressive: true
        })))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.png', ['cache']);
});

gulp.task('default', ['cache', 'watch']);
