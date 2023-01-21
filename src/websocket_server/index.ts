import { WebSocketServer } from "ws";
import { handleEvent } from "./handleEvent.js";

export const wss = new WebSocketServer({ port:8080 });

wss.on("connection", ws => {
    console.log("Connection accepted!");
    ws.on("message", data => {
        const eventData: Array<string> = JSON.stringify(data.toString()).replace(/"/g,"").split(" ");
        console.log(eventData);
        handleEvent(eventData);
    });
});
