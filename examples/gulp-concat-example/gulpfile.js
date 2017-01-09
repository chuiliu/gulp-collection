var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat:javascript', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('concat:css', function() {
    return gulp.src(['src/css/reset.css', 'src/css/common.css'])  // 按照数组中的顺序合并
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['concat:javascript', 'concat:css']);
