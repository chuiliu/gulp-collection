var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('git', shell.task(['git add -A', 'git commit -m "update"', 'git push']));

gulp.task('default', ['git']);

