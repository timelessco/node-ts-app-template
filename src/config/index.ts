import { config } from "dotenv";
import { z } from "zod";

import { validateEnvironmentVariables } from "../utils/validateEnvironmentVariables.js";

// eslint-disable-next-line node/no-process-env
config({ path: `.env.${process.env.NODE_ENV ?? "development"}` });

/**
 * Schema for the environment variables.
 * @typedef {object} EnvironmentVariablesSchema
 * @property {string} NODE_ENV - The environment the application is running in.
 * @property {string} LOG_FORMAT - The format of the logs.
 * @property {string} LOG_DIR - The directory to store the logs in.
 * @see https://env.t3.gg/docs/recipes
 */
const environmentVariablesSchema = {
	NODE_ENV: z
		.enum(["development", "production", "staging"])
		.optional()
		.default("development"),
	LOG_FORMAT: z.string().optional().default("combined"),
	LOG_DIR: z.string().optional().default("./logs"),
};

export const environment = validateEnvironmentVariables(
	environmentVariablesSchema,
);

export const { NODE_ENV, LOG_FORMAT, LOG_DIR } = environment;
