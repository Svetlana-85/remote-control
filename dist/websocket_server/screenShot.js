var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Region, screen } from "@nut-tree/nut-js";
import Jimp from "jimp";
export const getScreenShot = (x, y) => __awaiter(void 0, void 0, void 0, function* () {
    const widthImg = 200;
    const heightImg = 200;
    const region = new Region(x, y, widthImg, heightImg);
    const screenShot = yield (yield screen.grabRegion(region)).toRGB();
    const image = new Jimp({ data: screenShot.data, width: screenShot.width, height: screenShot.height });
    const buff = yield image.getBufferAsync(Jimp.MIME_PNG);
    const result = buff.toString("base64");
    return result;
});
