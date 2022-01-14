module.exports = function() {

	$.gulp.task('js:dev', function () {
		return $.gulp.src($.path.src.js)
			.pipe($.webpackStream({
				mode: 'development', // development production none
				output: {
					filename: 'common.min.js'
				},
				module: {
					rules: [{
						test: /\.m?js$/,
						exclude: /node_modules|bower_components/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: [
									['@babel/preset-env', {
										targets: "defaults"
									}]
								]
							}
						}
					}]
				}
			}))
			.pipe($.gulp.dest($.path.build.js))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});

	$.gulp.task('js:prod', function () {
		return $.gulp.src($.path.src.js)
			.pipe($.webpackStream({
				mode: 'production', // development production none
				output: {
					filename: 'common.min.js'
				},
				module: {
					rules: [{
						test: /\.m?js$/,
						exclude: /node_modules|bower_components/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: [
									['@babel/preset-env', {
										targets: "defaults"
									}]
								]
							}
						}
					}]
				}
			}))
			.pipe($.gulp.dest($.path.build.js))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});

};
