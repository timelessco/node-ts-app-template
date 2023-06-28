import http, { type IncomingMessage, type ServerResponse } from "node:http";

import { log } from "./utils/log.js";
import { logError } from "./utils/logError.js";

try {
	const server = http.createServer(
		(_request: IncomingMessage, response: ServerResponse) => {
			response.writeHead(200, { "Content-Type": "text/plain" });
			response.end("Hello, World!");
		},
	);

	server.listen(3_000, () => {
		log("Server is listening on port 3000");
	});
} catch (error) {
	logError(`Error in server.ts`, error);
}
