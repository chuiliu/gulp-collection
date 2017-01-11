var gulp = require('gulp'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    pngquant  = require("imagemin-pngquant");  // png压缩插件

gulp.task('imagemin', function() {
    return gulp.src('src/*.{png,jpg,gif}')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            use: [pngquant()]  // 使用插件，可选
        })))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.{png,jpg,gif}', ['imagemin']);
});

gulp.task('default', ['imagemin', 'watch']);
