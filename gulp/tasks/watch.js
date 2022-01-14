module.exports = function() {

	$.gulp.task('watch', function(){
		$.gulp.watch($.path.watch.sass, $.gulp.series('sass:dev'));
		$.gulp.watch($.path.watch.js, $.gulp.series('js:dev'));
		$.gulp.watch($.path.watch.fonts, $.gulp.series('fonts'));
		$.gulp.watch($.path.watch.img, $.gulp.series('images'));
		$.gulp.watch($.path.watch.img, $.gulp.series('images:webp'));
		$.gulp.watch($.path.watch.video, $.gulp.series('video'));
		$.gulp.watch($.path.watch.files, $.gulp.series('files'));
		$.gulp.watch($.path.watch.robots, $.gulp.series('robots'));
		$.gulp.watch($.path.watch.svg, $.gulp.series('svg'));
		$.gulp.watch($.path.watch.html, $.gulp.series('html'));
	});

};