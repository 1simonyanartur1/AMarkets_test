var cleanCSSOptions = {
	format: 'beautify',
	level: {
		0: {
			specialComments: 0
		}
	}
}
var gulpSassOptions = {
	outputStyle: 'expanded',
	sourceComments: true
}
var autoprefixerOptions = {
	overrideBrowserslist: ['last 2 versions'],
	grid: "autoplace",
}

module.exports = function() {

	$.gulp.task('sass:dev', function () {
		return $.gulp.src($.path.src.sass)
			.pipe($.sass(gulpSassOptions).on('error', $.notify.onError({
				message: "<%= error.message %>",
				title: "Sass Error!"
			})))
			.pipe($.autoprefixer(autoprefixerOptions))
			.pipe($.cleanCSS(cleanCSSOptions))
			.pipe($.rename(function (path) {
				path.extname = ".min.css";
			}))
			.pipe($.gulp.dest($.path.build.css))
			.pipe($.browserSync.stream());
	});

	$.gulp.task('sass:prod', function () {
		return $.gulp.src($.path.src.sass)
			.pipe($.sass(gulpSassOptions).on('error', $.notify.onError({
				message: "<%= error.message %>",
				title: "Sass Error!"
			})))
			.pipe($.autoprefixer(autoprefixerOptions))
			.pipe($.cleanCSS())
			.pipe($.rename(function (path) {
				path.extname = ".min.css";
			}))
			.pipe($.gulp.dest($.path.build.css))
	});

};