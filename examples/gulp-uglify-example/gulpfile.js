var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify',function(){
    return gulp.src('src/*.js')
        .pipe(uglify({
            // mangle: true,         // 修改变量名，默认true
            mangle: {
                except: ['require' ,'exports' ,'module' ,'$']  // 排除混淆关键字
            },
            compress: true,          // 完全压缩，默认true
            preserveComments: 'all'  // 保留注释
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['uglify']);
