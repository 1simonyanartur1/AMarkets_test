module.exports = function() {

  $.gulp.task('files', function () {
    return $.gulp.src($.path.src.files)
      .pipe($.gulp.dest($.path.build.files))
  });

};