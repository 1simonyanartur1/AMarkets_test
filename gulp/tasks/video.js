module.exports = function() {

  $.gulp.task('video', function () {
    return $.gulp.src($.path.src.video)
      .pipe($.rename(function (path) {
        var pathDir = path.dirname.replace('video', '').replace('blocks', '');
        path.dirname = "/video/" + pathDir;
      }))
      .pipe($.gulp.dest($.path.build.video))
  });

};