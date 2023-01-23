var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mouse } from "@nut-tree/nut-js";
import { drawRectangle, drawCircle } from "./drawObject.js";
import { getScreenShot } from "./screenShot.js";
export const handleEvent = (eventData) => __awaiter(void 0, void 0, void 0, function* () {
    const position = yield mouse.getPosition();
    switch (eventData[0]) {
        case "draw_circle":
            drawCircle(+eventData[1], position.x, position.y);
            break;
        case "draw_rectangle":
            yield drawRectangle(+eventData[1], +eventData[2]);
            break;
        case "draw_square":
            yield drawRectangle(+eventData[1], +eventData[1]);
            break;
        case "mouse_up":
            position.y = position.y - parseInt(eventData[1]);
            yield mouse.setPosition(position);
            break;
        case "mouse_down":
            position.y = position.y + parseInt(eventData[1]);
            yield mouse.setPosition(position);
            break;
        case "mouse_left":
            position.x = position.x - parseInt(eventData[1]);
            yield mouse.setPosition(position);
            break;
        case "mouse_right":
            position.x = position.x + parseInt(eventData[1]);
            yield mouse.setPosition(position);
            break;
        case "prnt_scrn":
            const arg = yield getScreenShot(position.x, position.y);
            console.log(`Result: ${eventData[0]}`);
            return `${eventData[0]} ${arg}`;
        case "mouse_position":
            console.log(`Result: ${eventData[0]} ${position.x},${position.y}`);
            return `${eventData[0]} ${position.x},${position.y}`;
    }
    return eventData[0];
});
