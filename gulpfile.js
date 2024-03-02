var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var img2svg = require('gulp-img2svg');



// scss to css
gulp.task('style', function(){
  return gulp.src('assets/scss/**/*.scss',{sourcemaps:false})
   	.pipe(sass({
      // outputStyle: 'compressed' //If Convert normal style so remove this line
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('assets/css', { sourcemaps: '.' }))
    .pipe(browserSync.reload({stream: true})); 			
}); 



// images to svg convertor
gulp.task('imgsvg', function () {
    gulp.src('assets/ziconimg/**/**.png')
        .pipe(img2svg())
        .pipe(gulp.dest('svgicon'));
});


// watch task
gulp.task('watch', function(){
	browserSync.init({
	    proxy: "http://localhost/my-theme/gokani/index.html"
	});   
  gulp.watch('assets/scss/**/*.scss', gulp.series(['style']));
})