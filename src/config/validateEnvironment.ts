import { cleanEnv, str } from "envalid";

/**
 * Validates the environment variables needed for the application to run.
 *
 * @function
 * @returns {void}
 */
export const validateEnvironmentVariables = (): void => {
	cleanEnv(process.env, {
		NODE_ENV: str(),
	});
};

declare global {
	// By default, we do not want any namespace in Start UI [web] as it is more
	// error prone and not useful in front end applications.
	namespace NodeJS {
		// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, unicorn/prevent-abbreviations
		interface ProcessEnv {
			NODE_ENV: "development" | "production" | "test";
		}
	}
}
