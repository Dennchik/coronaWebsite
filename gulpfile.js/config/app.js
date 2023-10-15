const recompress = require("imagemin-jpeg-recompress");
const pngquant = require("imagemin-pngquant");
const gul = require("gulp-load-plugins")();
const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
	isProd: isProd,
	isDev: isDev,

	htmlMin: {
		collapseWhitespace: isProd
	},
	webpack: {
		mode: isProd ? "production" : "development"
	},
	fonter: {
		subset: [66, 67, 68, 69, 70, 71],
		formats: ['woff', 'ttf', 'eot', 'svg']
	},
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			"Android >= 4",
			"last 3 versions",
			"Firefox >= 24",
			"Safari >= 6",
			"Opera >= 12"
		]
	},
	imagemin: ({
			verbose: true,
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
		}
			[
			recompress({
				loops: 6,
				min: 50,
				max: 90,
				quality: 'high',
				use: [pngquant({
					quality: [0.8, 1],
					strip: true,
					speed: 1
				})],
			}),
				gul.imagemin.gifsicle(),
				gul.imagemin.optipng(),
				gul.imagemin.svgo()
			]
	),
}
