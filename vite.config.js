// TODO, нужно настроить build и serve, без лишних папок для картинок
"use strict"
import { defineConfig } from "vite"
import path from "path"

export default defineConfig(({ command }) => {
	const resolve = {
		alias: {
			"@s": path.resolve(__dirname, "./src/style"),
			"@m": path.resolve(__dirname, "./src/module"),
			"@l": path.resolve(__dirname, "./src/langs"),
			"@i": path.resolve(__dirname, "./public/img"),
			"@f": path.resolve(__dirname, "./public/fonts"),
		},
	}

	const server = {
		port: 8080,
	}

	if (command === "serve") {
		return {
			resolve,
			server,
		}
	} else {
		// command === 'build'
		return {
			resolve,
			server,
			build: {
				minify: "terser",
			},
		}
	}
})
