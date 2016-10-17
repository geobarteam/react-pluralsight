"use strict";

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var exec = require('child_process').exec;
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');

var config = {
    paths:{
        html: './src/*.html',
        images:'./src/images/*',
        js: ['./src/**/*.js', './src/**/*.jsx'],
        dist: './dist',
        mainJs: 'src/main.jsx',
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

gulp.task('js', function(){
    browserify(config.paths.mainJs, {debug: true,  extension: [ "jsx" ]})
    .transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
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

gulp.task('lint', function(){
    return gulp.src(config.paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['lite-server','html','images','js', 'css','lint', 'watch']);