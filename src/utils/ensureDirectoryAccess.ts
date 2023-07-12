import fsSync from "node:fs";
import fs from "node:fs/promises";

import { throwError } from "./throwError.js";

/**
 * Checks if a directory exists and is readable and writable. If it doesn't exist, it creates it. If it exists but is not readable or writable, it makes it both.
 * @async
 * @function
 * @param {string} directoryPath - The directory path to check.
 * @returns {Promise<void>}  A promise that resolves to a void indicating whether the directory exists and is readable and writable.
 * @throws {Error} If the directory does not exist or is not accessible.
 */
export async function ensureDirectoryAccess(
	directoryPath: string,
): Promise<void> {
	try {
		await fs.access(
			directoryPath,
			// eslint-disable-next-line no-bitwise
			fsSync.constants.F_OK | fsSync.constants.W_OK | fsSync.constants.R_OK,
		);
	} catch {
		try {
			await fs.mkdir(directoryPath, { recursive: true });
			await fs.chmod(directoryPath, 0o777);
		} catch (error) {
			throwError(
				error,
				`${directoryPath} does not exists / writable / readable in ensureDirectoryAccess function`,
			);
		}
	}
}
