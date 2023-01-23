import { Region, screen } from "@nut-tree/nut-js";
import Jimp from "jimp";

export const getScreenShot = async(x: number, y: number) => {
    const widthImg = 200;
    const heightImg = 200;
    const region: Region =  new Region (x, y, widthImg, heightImg);
    const screenShot = await (await screen.grabRegion(region)).toRGB();
    const image = new Jimp({ data: screenShot.data, width: screenShot.width, height: screenShot.height });
    const buff = await image.getBufferAsync(Jimp.MIME_PNG);
    const result = buff.toString("base64");
    return result;
};
