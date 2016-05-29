'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const vueify = require('gulp-vueify');

gulp.task('babel', () => {
    
    console.log(`Transpiling at ${new Date()}`);
    
    const b = babel();
    
    b.on('error', (err) => {
        console.log(err.message);        
    });
    
    gulp.src(['src/**/*.js', '!src/public/main.js'])
    .pipe(b)
    .pipe(gulp.dest('lib'));
    
});

gulp.task('vueify', () => {
   gulp.src('src/public/javascript/vue-templates/**/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('lib/public/javascript/vue-templates')); 
});

gulp.task('watch', () => {
   gulp.watch(['src/**/*'], ['babel']);
   gulp.watch(['src/public/javascript/vue-templates/**/*'], ['vueify']); 
});

gulp.task('default', ['watch']);