const pathSrc = "./#src";
const pathDest = "./build";
const pathEnd = "./public";

module.exports = {
	root: pathDest,

	html: {
		src: pathSrc + "/*.html",
		watch: pathSrc + "/**/*.html",
		dest: pathDest
	},
	endHtml: {
		src: pathDest + "/html/*.html",
		watch: pathDest + "/html/*.html",
		dest: pathEnd
	},
	css: {
		src: pathSrc + "/css/*.css",
		watch: pathSrc + "/css/**/*.css",
		dest: pathDest + "/css"
	},
	endCss: {
		src: pathDest + "/**/*.css",
		watch: pathDest + "/**/*.css",
		dest: pathEnd + "/css"
	},
	js: {
		src: pathSrc + "/js/*.js",
		watch: pathSrc + "/js/**/*.js",
		dest: pathDest + "/js"
	},
	endJs: {
		src: pathDest + "/**/*.js",
		watch: pathDest + "/**/*.js",
		dest: pathEnd
	},
	image: {
		src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg,ico}",
		watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,ico}",
		dest: pathDest + "/img"
	},
	endImage: {
		src: pathDest + "/**/*.{png,jpg,jpeg,gif,svg,ico,webp}",
		watch: pathDest + "/img/**/*.{png,jpg,jpeg,gif,svg,ico,webp}",
		dest: pathEnd
	},
	fonts: {
		src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
		watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
		dest: pathDest + "/fonts"
	},
	endFonts: {
		src: pathDest + "/**/*.{woff,woff2,ttf,eot,svg}",
		watch: pathDest + "/**/*.{woff,woff2,ttf,eot,svg}",
		dest: pathEnd
	},
	final: {
		src: pathDest + "/**/*.*",
		
		dest: pathEnd
	},
}






