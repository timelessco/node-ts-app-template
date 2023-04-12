// Thanks to https://github.com/t3-oss/create-t3-app/
/**
 * This file ensures the app isn't built with invalid env vars.
 */
import { type z } from "zod";

import { environmentSchema, environmentVariables } from "./schema";
import { formatErrors } from "./utils";

declare global {
	// By default, we do not want any namespace in Start UI [web] as it is more
	// error prone and not useful in front end applications.
	namespace NodeJS {
		// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, unicorn/prevent-abbreviations, @typescript-eslint/no-empty-interface
		interface ProcessEnv extends z.infer<typeof environmentSchema> {}
	}
}

const parsedServerEnvironment =
	environmentSchema.safeParse(environmentVariables);

if (!parsedServerEnvironment.success) {
	console.error(
		"❌ Invalid environment variables:\n",
		...formatErrors(parsedServerEnvironment.error.format()),
	);
	throw new Error("Invalid environment variables");
}

export const environment = {
	...parsedServerEnvironment.data,
};
