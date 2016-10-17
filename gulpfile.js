"use strict";
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var exec = require('child_process').exec;

var config = {
    paths:{
        html: './src/*.html',
        images:'./src/images/*',
        dist: './dist',
        tsx:'./src/**/*.tsx',
        reactLib: ['node_modules/react/dist/react.js', 'node_modules/react-dom/dist/react-dom.js'],
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ]
    }
};

gulp.task('lite-server', function (cb) {
  exec('npm run lite', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('webpack', function() {
 return gulp.src('src/index.tsx')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('./'));
});

gulp.task('lib', function(){
    gulp.src(config.paths.reactLib)
        .pipe(gulp.dest(config.paths.dist + '/lib'));
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('images', function(){
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));
    
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});


gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.tsx, ['webpack']);
});

gulp.task('default', ['lite-server','html','lib','images', 'css','webpack', 'watch']);