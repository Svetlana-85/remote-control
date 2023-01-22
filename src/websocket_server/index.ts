import { pipeline } from "stream";
import { createWebSocketStream, WebSocketServer } from "ws";
import { handleEvent } from "./handleEvent.js";

export const wss = new WebSocketServer({ port:8080 });

wss.on("connection", (ws) => {
    console.log("Connection accepted!");
    const stream = createWebSocketStream(ws, { decodeStrings: false });

    stream.on("data", async (data) => {
        const eventData: Array<string> = JSON.stringify(data.toString()).replace(/"/g,"").split(" ");
        stream.write(await handleEvent(eventData));
    }); 

});
