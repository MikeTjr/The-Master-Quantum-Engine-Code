
export class HumanRenderer {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.fieldRadius = 90;
        this.energyPhase = 0;
    }

    update(){}

    draw(ctx){
        const pulse = Math.sin(this.energyPhase) * 8;

        // Toroidal field
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(90,180,255,0.25)';
        ctx.lineWidth = 2;
        ctx.arc(this.x, this.y, this.fieldRadius + pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Head
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.arc(this.x, this.y - 120, 20, 0, Math.PI * 2);
        ctx.fill();

        // Body silhouette
        ctx.strokeStyle = 'rgba(255,255,255,0.85)';
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y - 95);
        ctx.lineTo(this.x, this.y + 20);
        ctx.stroke();

        // Arms
        ctx.beginPath();
        ctx.moveTo(this.x - 45, this.y - 35);
        ctx.lineTo(this.x + 45, this.y - 35);
        ctx.stroke();

        // Legs
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + 20);
        ctx.lineTo(this.x - 35, this.y + 100);
        ctx.moveTo(this.x, this.y + 20);
        ctx.lineTo(this.x + 35, this.y + 100);
        ctx.stroke();

        // Nervous system glow
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(120,220,255,0.55)';
        ctx.lineWidth = 2;
        ctx.moveTo(this.x, this.y - 90);
        ctx.lineTo(this.x, this.y + 15);
        ctx.stroke();
    }
}
