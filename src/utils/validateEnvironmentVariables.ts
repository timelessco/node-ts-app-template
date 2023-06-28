// https://github.com/t3-oss/t3-env/blob/main/packages/core/index.ts

import { z, type ZodError, type ZodObject, type ZodType } from "zod";

import { type Prettify } from "./Prettify.js";
import { throwError } from "./throwError.js";

const onValidationError = (error: ZodError) => {
	console.error(
		"❌ Invalid environment variables:",
		error.flatten().fieldErrors,
	);

	throw new Error("Invalid environment variables");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Impossible<T extends Record<string, any>> = Partial<
	Record<keyof T, never>
>;

type InferredSchema<Schema extends Record<string, ZodType>> = Partial<{
	[Key in keyof Schema]: Schema[Key];
}>;

type ValidateEnvironmentVariablesOptions<
	Schema extends Record<string, ZodType>,
> = Impossible<InferredSchema<never>> | InferredSchema<Schema>;

export function validateEnvironmentVariables<
	Schema extends Record<string, ZodType> = NonNullable<unknown>,
>(
	schemaObject: ValidateEnvironmentVariablesOptions<Schema>,
): Prettify<z.infer<ZodObject<Schema>>> {
	try {
		const _schemaObject =
			typeof schemaObject === "object" ? (schemaObject as z.ZodRawShape) : {};

		// eslint-disable-next-line node/no-process-env
		const parsed = z.object(_schemaObject).safeParse(process.env);

		if (!parsed.success) {
			return onValidationError(parsed.error);
		}

		return parsed.data as unknown as Prettify<z.infer<ZodObject<Schema>>>;
	} catch (error) {
		return throwError(error, "Error in validateEnvironmentVariables function");
	}
}
