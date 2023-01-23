var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createWebSocketStream, WebSocketServer } from "ws";
import { handleEvent } from "./handleEvent.js";
export const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws) => {
    console.log("WebSocketServer connection accepted!");
    const stream = createWebSocketStream(ws, { decodeStrings: false });
    stream.on("data", (data) => __awaiter(void 0, void 0, void 0, function* () {
        const command = JSON.stringify(data.toString()).replace(/"/g, "");
        console.log(`Command: ${command}`);
        const eventData = command.split(" ");
        stream.write(yield handleEvent(eventData));
    }));
    ws.on("close", () => {
        console.log("WebSocketServer connection closed");
    });
});
