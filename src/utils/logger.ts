import { join } from "node:path";

import { consola } from "consola";
import { createLogger, format } from "winston";
import winstonDaily from "winston-daily-rotate-file";

import { LOG_DIR, NODE_ENV } from "../config/index.js";

import { ensureDirectoryAccess } from "./ensureDirectoryAccess.js";
import { throwError } from "./throwError.js";

/**
 * The directory path where log files are stored.
 */
const logDirectory = join(LOG_DIR ?? "./logs");

// Ensure that the log directory exists
await ensureDirectoryAccess(logDirectory).catch((error) =>
	throwError(error, `Failed to access log directory ${logDirectory}`),
);

const { combine, timestamp, printf, errors, prettyPrint } = format;

// Define log format
const logFormat = printf(
	({ level, message, timestamp: _timestamp }) =>
		`${_timestamp} ${level}: ${message}`,
);
const jsonLogFileFormat = combine(
	errors({ stack: true }),
	timestamp({
		format: "YYYY-MM-DD HH:mm:ss",
	}),
	logFormat,
	prettyPrint(),
);

const isDevelopment = NODE_ENV === "development";

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const winstonLogger = createLogger({
	format: jsonLogFileFormat,
	transports: [
		// debug log setting
		new winstonDaily({
			level: "debug",
			datePattern: "YYYY-MM-DD",
			// log file /logs/debug/*.log in save
			dirname: logDirectory + "/debug",
			filename: `%DATE%.log`,
			// 30 Days saved
			maxFiles: 30,
			json: false,
			zippedArchive: true,
		}),
		// error log setting
		new winstonDaily({
			level: "error",
			datePattern: "YYYY-MM-DD",
			// log file /logs/error/*.log in save
			dirname: logDirectory + "/error",
			filename: `%DATE%.log`,
			// 30 Days saved
			maxFiles: 30,
			handleExceptions: true,
			json: false,
			zippedArchive: true,
		}),
	],
});

// Add console transport for logging to console
// if (isDevelopment) {
// 	winstonLogger.add(
// 		new transports.Console({
// 			format: combine(
// 				errors({ stack: true }),
// 				colorize(),
// 				printf(({ level, message, timestamp: _timestamp, stack }) => {
// 					if (stack) {
// 						// print log trace
// 						console.error(stack);
// 					}

// 					return `${_timestamp} ${level}: ${message}`;
// 				}),
// 			),
// 		}),
// 	);
// }

// Define a stream for morgan to use for logging HTTP requests
const stream = {
	write: (message: string) => {
		winstonLogger.info(
			message.slice(0, Math.max(0, message.lastIndexOf("\n"))),
		);
	},
};

const logger = isDevelopment ? consola : winstonLogger;

export { logger, stream };
