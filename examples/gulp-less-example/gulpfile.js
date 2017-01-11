var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    LessAutoprefix = require('less-plugin-autoprefix'),  // autoprefix插件
    autoprefix = new LessAutoprefix({ browsers: ['last 15 versions'] }),
    path = require('path');

gulp.task('less', function() {
    return gulp.src('src/less/style.less')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [path.join(__dirname, 'src/less', 'includes')],  // 需要指定 @import 引用的文件位置
            plugins: [autoprefix]  // 可选
        }))
        .pipe(sourcemaps.write())
        // .pipe(sourcemaps.write('./maps'))   // 指定sourcemaps的存储路径
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);
