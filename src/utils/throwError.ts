import { addAdditionalErrorMessage } from "./addAdditionalErrorMessage.js";

/**
 * Throws an error with an additional error message.
 * @param error - The original error.
 * @param errorMessage - The additional error message.
 * @throws {Error}
 */
export function throwError(error: unknown, errorMessage: string): never {
	throw new Error(addAdditionalErrorMessage(error, errorMessage), {
		cause: error,
	});
}
