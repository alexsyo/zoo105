'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const babelify = require('babelify');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const reactify = require('reactify');
const replace = require('gulp-replace');

gulp.task('html', () => {
    gulp.src('./app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/www/'))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    sass('./app/css/*.scss', {style: 'compressed'})
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
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

gulp.task('prepare.test', () => {
    gulp.src('./app/jsx/App.jsx')
        .pipe(replace(/(\/\/ )?import\ Media/, 'import Media'))
        .pipe(gulp.dest('./app/jsx/'));
});

gulp.task('prepare.build', () => {
    gulp.src('./app/jsx/App.jsx')
        .pipe(replace(/(\/\/ )?import\ Media/, '// import Media'))
        .pipe(gulp.dest('./app/jsx/'));
});

gulp.task('default', ['prepare.test', 'html', 'css', 'jsx', 'watch', 'connect']);
gulp.task('build', ['prepare.build', 'html', 'css', 'jsx', 'config']);