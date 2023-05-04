import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entry: ["src/server.ts"],
	outDir: "dist",
	target: "node18",
	format: ["esm"],
	dts: false,
	treeshake: true,
	sourcemap: Boolean(options.watch),
	minify: !options.watch,
	clean: true,
}));
