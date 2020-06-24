const gulp = require('gulp');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');
const clone = require('gulp-clone');
const clonesink = clone.sink();

gulp.task('images', () => {
    return gulp
        .src('raw/**/*')
        .pipe(imagemin()) // optimize images before converting
        .pipe(clonesink) // start stream
        .pipe(webp()) // convert images to webp and save a copy of the original format
        .pipe(clonesink.tap()) // close stream and send both formats to dist
        .pipe(gulp.dest('dist/'));
});