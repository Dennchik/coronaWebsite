//* Плагины
const gulpIf = require("gulp-if");
//* Обработка JavaScript
const js = () => {
	return $.gulp.src($.path.js.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "JavaScript",
				message: error.message
			}))
		}))
		.pipe($.gul.babel())
		// .pipe($.webpack($.app.webpack))
		.pipe(gulpIf($.app.isDev, $.gul.sourcemaps.init({
			loadMaps: true
		})))
		.pipe(gulpIf($.app.isDev, $.gul.sourcemaps.write('.', {
			includeContent: false,
		})))
		.pipe($.gulp.dest($.path.js.dest));
}
module.exports = js;