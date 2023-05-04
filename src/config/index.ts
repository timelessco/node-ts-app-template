import { config } from "dotenv";

/**
 * Loads environment variables from a .env file.
 *
 * @function
 * @returns {void}
 */
export const loadEnvironmentVariables = (): void => {
	config({ path: `.env.${process.env.NODE_ENV ?? "development"}` });
};

/**
 * The environment the application is running in.
 */
export const NODE_ENV = process.env.NODE_ENV;
