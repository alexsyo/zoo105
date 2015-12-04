'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const htmlmin = require('gulp-htmlmin');
const babelify = require('babelify');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const reactify = require('reactify');

gulp.task('html', () => {
    gulp.src('./app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/www/'))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    gulp.src('./app/css/*')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/www/css/'))
        .pipe(connect.reload());
});

gulp.task('jsx', () => {
    browserify('./app/jsx/Start.jsx', {debug: true})
        .transform(babelify, {
            presets: ['es2015', 'react']
        }).bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dist/www/js/'))
        .pipe(connect.reload());
});

gulp.task('config', () => {
    gulp.src('./app/config.xml')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('vendor', () => {
    gulp.src([
        './bower_components/react/react.js',
        './bower_components/react/react-dom.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/www/js/'));
});

gulp.task('watch', () => {
    gulp.watch('./app/*.html', ['html']);
    gulp.watch('./app/css/*', ['css']);
    gulp.watch('./app/jsx/*.jsx', ['jsx']);
    gulp.watch('./app/config.xml', ['config']);
});

gulp.task('connect', () => {
    connect.server({
        root: './dist/www/',
        livereload: true
    });
});

gulp.task('buildVendor', () => {
    gulp.src([
        './bower_components/react/react.min.js',
        './bower_components/react/react-dom.min.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/www/js/')); 
});

gulp.task('default', ['html', 'css', 'jsx', 'config', 'vendor', 'watch', 'connect']);
gulp.task('build', ['html', 'jsx', 'buildVendor']);