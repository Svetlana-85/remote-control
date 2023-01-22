import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export const drawRectangle = async(x: number, y: number) => {
    await mouse.move(right(x));
    await mouse.move(down(y));
    await mouse.move(left(x));
    await mouse.move(up(y));
};

export const drawCircle = async(r: number, x0: number, y0: number) => {
    const n = Math.round(2 * Math.PI * r);
    console.log(`circle ${n}`);
    for(let i = 1; i <= n; i++) {
        const x: number = Math.ceil((Math.cos(2 * Math.PI * i / n) * r + 0.5) + x0 - r) ;
        const y: number = Math.ceil((Math.sin(2 * Math.PI * i / n) * r + 0.5) + y0);
        await mouse.move([{x,y}]);
    }
};
