import { httpServer } from "./http_server/index.js";
import { wss } from "./websocket_server/index.js";
const HTTP_PORT = 8181;
httpServer.listen(HTTP_PORT, () => {
    console.log(`Start static http server on the ${HTTP_PORT} port!`);
});
process.on('SIGINT', () => {
    httpServer.close(() => process.exit());
    ws.close();
});
const ws = wss;
