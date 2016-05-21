'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

gulp.task('babel', () => {
    
    console.log(`Transpiling at ${new Date()}`);
    
    const b = babel();
    
    b.on('error', (err) => {
        console.log(err.message);        
    });
    
    gulp.src(['src/**/*', '!src/public/main.js'])
    .pipe(b)
    .pipe(gulp.dest('lib'));
    
});

// gulp.task('webpack', () => {
//     console.log('Webpack started');
    
//     gulp.src('src/javascript/main.js')
//         .pipe(webpack())
//         .pipe(gulp.dest('lib/public/javascript/main.min.js'));     
// });

gulp.task('watch', () => {
   gulp.watch(['src/**/*'], ['babel']); 
});

gulp.task('default', ['watch']);