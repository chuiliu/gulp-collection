var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            removeComments: true,  // 移除注释
            removeEmptyAttributes: true,  // 移除空属性，id="", class=""
            removeScriptTypeAttributes: true,  // 删除 type="text/javascript"
            removeStyleLinkTypeAttributes: true,  // 删除 type="text/css"
            collapseWhitespace: true,
            collapseBooleanAttributes: true,  // 处理布尔属性的值 <input checked="true"/> ==> <input checked />
            minifyJS: true,  // 压缩js
            minifyCSS: true  // 压缩CSS
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['htmlmin']);
