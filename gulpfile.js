var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var webpack = require('gulp-webpack');
var paths = {
    img: ['origin/imgs/*', 'public/imgs'],
    entry: ['origin/entry/*.js', 'public/build']
};

gulp.task('img', function () {
    return gulp.src(paths.img[0])
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(paths.img[1]));
});

gulp.task('entry', function () {
    return gulp.src(paths.entry[0])
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(paths.entry[1]));
});
gulp.task('watch', function () {
    gulp.watch('origin/es6/*.js', ['entry']);
    gulp.watch('origin/sass/**/*.scss', ['entry']);
    gulp.watch(paths.entry[0], ['entry']);
});

gulp.task('default', ['watch']);