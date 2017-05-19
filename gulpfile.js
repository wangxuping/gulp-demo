var gulp = require('gulp'),//创建 gulp模块
    less = require('gulp-less');//创建less 模块
    uglify  = require('gulp-uglify');//创建js混淆压缩 模块
    gulp_concat  = require('gulp-concat');//创建 文件合并模块
    minify_css =require("gulp-minify-css");　//创建 css混淆压缩模块


gulp.task('testCss', function () {
    gulp.src('src/scss/*.css')
       .pipe(gulp_concat("gulp-demo.min.css"))
       .pipe(minify_css())
       .pipe(gulp.dest('build/css'));
});

gulp.task('concat', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp_concat('gulp-demo.min.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('default',['testCss','concat']);
