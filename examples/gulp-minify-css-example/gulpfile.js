var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');

gulp.task('minifyCSS', function() {
    gulp.src('src/*.css')
        .pipe(minifyCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.css', ['minifyCSS']);
});

gulp.task('default', ['minifyCSS', 'watch']);
