import { logger } from "./logger.js";

export function errorLoggerWithStatus(
	status: number,
	message: string,
	error?: unknown,
) {
	logger.error(`StatusCode:: ${status}, Message:: ${message} -`, error);
}
