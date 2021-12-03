const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');


const base = {
    sass: 'sass/',
    sassWatch: 'sass/**.sass',
    sassFile: 'style.sass',
}


gulp.task('styles', function () {
    return gulp.src(base.sass + base.sassFile)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/'));
});



gulp.task('watch', function(){
    gulp.watch([base.sassWatch], gulp.series('styles'));
});























// gulp.task('default', gulp.series('styles'));