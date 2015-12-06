'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-ruby-sass');
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
    sass([
        './bower_components/foundation-apps/scss/*.scss',
        './app/css/*.scss'
    ], {style: 'compressed'})
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

gulp.task('vendorCss', () => {
    gulp.src('./bower_components/foundation-apps/dist/css/foundation-apps.min.css')
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/www/css/'));
});

gulp.task('vendorJs', () => {
    gulp.src('./node_modules/react-foundation-apps/dist/react-foundation-apps.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/www/js/'));
});

gulp.task('watch', () => {
    gulp.watch('./app/*.html', ['html']);
    gulp.watch('./app/css/*', ['css']);
    gulp.watch('./app/jsx/**/*.jsx', ['jsx']);
    gulp.watch('./app/config.xml', ['config']);
});

gulp.task('connect', () => {
    connect.server({
        root: './dist/www/',
        livereload: true
    });
});

gulp.task('default', ['html', 'css', 'jsx', 'config', 'watch', 'connect']);
gulp.task('build', ['html', 'jsx', 'buildVendor']);