//* Плагины
const gulpIf = require("gulp-if");
//* Обработка Image
const image = () => {
	return $.gulp.src($.path.image.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "Image",
				message: error.message
			}))
		}))
		.pipe($.gul.newer($.path.image.dest))
		.pipe($.gul.webp())
		.pipe($.gulp.dest($.path.image.dest))
		.pipe($.gulp.src($.path.image.src))
		.pipe($.gul.newer($.path.image.dest))
		.pipe(gulpIf($.app.isProd, $.gul.imagemin($.app.imagemin)))
		.pipe($.gul.size({ title: "После сжатия-image:" }))
		.pipe($.gulp.dest($.path.image.dest));
}
module.exports = image;