import http, { type IncomingMessage, type ServerResponse } from "node:http";

import { loadEnvironmentVariables } from "./config";
import { validateEnvironmentVariables } from "./config/validateEnvironment";

loadEnvironmentVariables();
validateEnvironmentVariables();

const server = http.createServer(
	(_request: IncomingMessage, response: ServerResponse) => {
		response.writeHead(200, { "Content-Type": "text/plain" });
		response.end("Hello, World!");
	},
);

server.listen(3_000, () => {
	// eslint-disable-next-line no-console
	console.log("Server is listening on port 3000");
});
