var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
    gulp.src('images/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('auto', function() {
    gulp.watch('images/*.*', ['imagemin']);
});

gulp.task('default', ['imagemin', 'auto']);
