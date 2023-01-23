import { pipeline } from "stream";
import { createWebSocketStream, WebSocketServer } from "ws";
import { handleEvent } from "./handleEvent.js";

export const wss = new WebSocketServer({ port:8080 });

wss.on("connection", (ws) => {
    console.log("WebSocketServer connection accepted!");
    const stream = createWebSocketStream(ws, { decodeStrings: false });

    stream.on("data", async (data) => {
        const command = JSON.stringify(data.toString()).replace(/"/g,"");
        console.log(`Command: ${command}`);
        const eventData: Array<string> = command.split(" ");
        stream.write(await handleEvent(eventData));
    }); 

    ws.on("close", () => {
        console.log("WebSocketServer connection closed");
    });

});
