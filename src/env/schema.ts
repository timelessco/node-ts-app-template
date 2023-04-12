// Thanks to https://github.com/t3-oss/create-t3-app/
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const environmentSchema = z.object({
	NODE_ENV: z.enum(["development", "test", "production"]),
	// API_URL: z.string().url(),
});

type environmentTypes = z.infer<typeof environmentSchema>;

/**
 * You can't destruct `process.env` as a regular object in the Next.js
 * middleware, so you have to do it manually here.
 */
export const environmentVariables: {
	[k in keyof environmentTypes]: environmentTypes[k] | undefined;
} = {
	NODE_ENV: process.env.NODE_ENV,
	// API_URL: process.env.API_URL,
};
