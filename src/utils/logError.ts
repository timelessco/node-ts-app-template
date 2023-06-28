import { logger } from "./logger.js";

export function logError(message: string, error?: unknown) {
	logger.error(`Message:: ${message} -`, error);
}
