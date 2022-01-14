module.exports = function() {

	$.gulp.task('svg', function() {
		return $.gulp.src($.path.src.svg)
			.pipe($.gulp.dest($.path.build.svg))
	});

};
