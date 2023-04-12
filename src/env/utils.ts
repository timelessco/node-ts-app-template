import { type z } from "zod";

const isNonNullable = <T>(x: T): x is NonNullable<T> => {
	if (x === null || x === undefined || Number.isNaN(x)) {
		return false;
	}

	return true;
};

export const formatErrors = (
	errors: z.ZodFormattedError<Map<string, string>, string>,
): string[] => {
	if (!errors) {
		return [];
	}

	return Object.entries(errors)
		.map(([name, value]) => {
			if (value && "_errors" in value) {
				return `${name}: ${value._errors.join(", ")}\n`;
			}

			return null;
		})
		.filter(isNonNullable);
};
