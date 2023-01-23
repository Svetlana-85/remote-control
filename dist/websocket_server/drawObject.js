var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { down, left, mouse, right, up } from "@nut-tree/nut-js";
export const drawRectangle = (x, y) => __awaiter(void 0, void 0, void 0, function* () {
    yield mouse.move(right(x));
    yield mouse.move(down(y));
    yield mouse.move(left(x));
    yield mouse.move(up(y));
});
export const drawCircle = (r, x0, y0) => __awaiter(void 0, void 0, void 0, function* () {
    const n = Math.round(2 * Math.PI * r);
    for (let i = 1; i <= n; i++) {
        const x = Math.ceil((Math.cos(2 * Math.PI * i / n) * r + 0.5) + x0 - r);
        const y = Math.ceil((Math.sin(2 * Math.PI * i / n) * r + 0.5) + y0);
        yield mouse.move([{ x, y }]);
    }
});
