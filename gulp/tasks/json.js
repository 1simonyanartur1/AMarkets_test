module.exports = function () {

	$.gulp.task('json', function () {
		return $.gulp.src($.path.src.json)
			.pipe($.rename(function (path) {
				var pathDir = path.dirname.replace('blocks', '');
				path.dirname = "/json/" + pathDir;
			}))
			.pipe($.gulp.dest($.path.build.json))
	});

};