import { httpServer } from "./http_server/index.js";
import { HTTP_PORT } from "./websocket_server/constants.js";
import { wss } from "./websocket_server/index.js";

httpServer.listen(HTTP_PORT, () => {
    console.log(`Start static http server on the ${HTTP_PORT} port!`);
});

process.on('SIGINT', () => {
    httpServer.close(() => process.exit());
    ws.close();
});

const ws = wss;
