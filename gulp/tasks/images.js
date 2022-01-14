module.exports = function() {

  $.gulp.task('images', function () {
    return $.gulp.src($.path.src.img)
      .pipe($.rename(function (path) {
        var pathDir = path.dirname.replace('img', '').replace('blocks', '');
        path.dirname = "/img/" + pathDir;
      }))
      .pipe($.gulp.dest($.path.build.img))
  });

  $.gulp.task('images:webp', function () {
    return $.gulp.src($.path.src.img)
      .pipe($.cache($.webp()))
      .pipe($.rename(function (path) {
        var pathDir = path.dirname.replace('img', '').replace('blocks', '');
        path.dirname = "/img/" + pathDir + "/webp/";
      }))
      .pipe($.gulp.dest($.path.build.img))
  });

};