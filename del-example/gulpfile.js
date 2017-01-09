var gulp = require('gulp');
var del = require('del');

gulp.task('del', function (cb) {
    del([
        'dist/*.txt',
        // 不删除 not delete.txt
        '!dist/not-delete.txt'
    ], cb);
});

gulp.task('default', ['del']);
