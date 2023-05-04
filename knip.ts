import { type KnipConfig } from "knip";

const config: KnipConfig = {
	project: ["src/**/*.ts!"],
	entry: ["src/**/*.ts!", "tailwind.config.cjs", "env/**/*", "release-it/**/*"],
	ignoreDependencies: ["ts-node"],
};

export default config;
