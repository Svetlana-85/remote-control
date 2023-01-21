import { mouse } from "@nut-tree/nut-js";
import { Point } from "@nut-tree/nut-js/dist/lib/point.class";

export const handleEvent = async (eventData: Array<string>) => {
    const position = await mouse.getPosition();
    switch (eventData[0]) {
        case "draw_circle": console.log(eventData[0]);
          break;
        case "draw_rectangle": console.log(eventData[0]);
          break;
        case "draw_square": console.log(eventData[0]);
          break;
        case "mouse_up": console.log(eventData[0]);
          position.y = position.y - +eventData[1];
          await mouse.setPosition(position);
          break;
        case "mouse_down": console.log(eventData[0]);
          position.y = position.y + +eventData[1];
          await mouse.setPosition(position);
          break;
        case "mouse_left": console.log(eventData[0]);
          position.x = position.x - +eventData[1];
          await mouse.setPosition(position);
          break;
        case "mouse_right": console.log(eventData[0]);
          position.x = position.x + +eventData[1];
          await mouse.setPosition(position);
          break;
        case "mouse_position": console.log(eventData[0]);
          break;
        case "prnt_scrn": console.log(eventData[0]);
          break;

    }
}