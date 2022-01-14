module.exports = function() {

	$.gulp.task('clean', function() {
		$.cache.clearAll();
		return $.del($.path.build.clean);
	});
	
};