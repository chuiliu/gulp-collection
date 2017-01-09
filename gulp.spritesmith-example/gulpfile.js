var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('spritesmith', function() {
    return gulp.src(['src/*.png', 'src/*.jpg'])
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',     // 生成的css
            padding: 10,               // 图标间距离
            algorithm: 'binary-tree'   // 图标排序方式
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['spritesmith']);
