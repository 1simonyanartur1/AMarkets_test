module.exports = function () {

	$.gulp.task('robots', function () {
		return $.gulp.src($.path.src.robots)
			.pipe($.gulp.dest($.path.build.robots));
	});

};