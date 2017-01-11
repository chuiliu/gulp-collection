var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    return gulp.src('src/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['jshint']);
});

gulp.task('default', ['jshint', 'watch']);
