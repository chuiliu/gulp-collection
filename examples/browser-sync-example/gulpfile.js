var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: '.'
        },
        port: 8000,
        files: ['*.html', 'css/*.css','js/*.js']
    });
});


gulp.task('default', ['browserSync']);
