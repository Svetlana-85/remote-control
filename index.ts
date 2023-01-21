import { httpServer } from "./src/http_server/index.js";
// import { mouse } from "@nut-tree/nut-js";
import { wss } from "./src/websocket_server/index.js";
// import { WebSocketServer } from "ws";

const HTTP_PORT = 8181;

httpServer.listen(HTTP_PORT, () => {
    console.log(`Start static http server on the ${HTTP_PORT} port!`);
});

process.on('SIGINT', () => {
    httpServer.close(() => process.exit());
});

const ws = wss;

// const el = document.querySelector("a");
