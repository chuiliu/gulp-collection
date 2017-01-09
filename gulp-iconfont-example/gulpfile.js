var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var runTimestamp = Math.round(Date.now() / 1000);


gulp.task('iconfont', function() {
    return gulp.src('src/*.svg')
        .pipe(iconfontCss({
            fontName: 'myfont',
            path: 'src/icons.css',
            targetPath: 'dist/icons.css',
            fontPath: 'fonts'
        }))
        .pipe(iconfont({
            fontName: 'myfont',              //
            prependUnicode: true,            // recommended option
            formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp,         // recommended to get consistent builds when watching files
            normalize: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['iconfont']);
