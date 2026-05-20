
export class FieldRenderer {
    drawField(ctx, x, y, radius){
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}
