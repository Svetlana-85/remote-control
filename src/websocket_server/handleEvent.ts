import { mouse } from "@nut-tree/nut-js";
import { drawRectangle, drawCircle } from "./drawObject.js";

export const handleEvent = async (eventData: Array<string>): Promise<string> => {
    const position = await mouse.getPosition();
    console.log(`${eventData[0]}`);
    switch (eventData[0]) {
        case "draw_circle":
          drawCircle(+eventData[1], position.x, position.y);
          break;
        case "draw_rectangle":
          await drawRectangle(+eventData[1], +eventData[2]);
          break;
        case "draw_square":
          await drawRectangle(+eventData[1], +eventData[1]);
          break;
        case "mouse_up":
          position.y = position.y - parseInt(eventData[1]);
          await mouse.setPosition(position);
          break;
        case "mouse_down":
          position.y = position.y + parseInt(eventData[1]);
          await mouse.setPosition(position);
          break;
        case "mouse_left":
          position.x = position.x - parseInt(eventData[1]);
          console.log();
          await mouse.setPosition(position);
          break;
        case "mouse_right":
          position.x = position.x + parseInt(eventData[1]);
          await mouse.setPosition(position);
          break;
        case "prnt_scrn": console.log(eventData[0]);
          break;
        case "mouse_position":
          return `${eventData[0]} ${position.x},${position.y}`;
    }
    return eventData[0];
}
