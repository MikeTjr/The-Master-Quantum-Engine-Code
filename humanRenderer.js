
export class HumanRenderer{
 constructor(x,y,color){
  this.x=x;
  this.y=y;
  this.color=color;
  this.phase=Math.random()*100;
  this.fieldRadius=140;
  this.breath=0;
  this.particles=Array.from({length:140},()=>({
    angle:Math.random()*Math.PI*2,
    radius:40+Math.random()*120,
    speed:0.002+Math.random()*0.008
  }));
 }

 update(){
  this.phase+=0.02;
  this.breath=Math.sin(this.phase)*8;
 }

 draw(ctx){
  // aura
  const g=ctx.createRadialGradient(this.x,this.y,20,this.x,this.y,this.fieldRadius+40);
  g.addColorStop(0,this.color+'66');
  g.addColorStop(1,'transparent');
  ctx.fillStyle=g;
  ctx.beginPath();
  ctx.arc(this.x,this.y-20,this.fieldRadius+20,0,Math.PI*2);
  ctx.fill();

  // toroidal rings
  for(let i=0;i<4;i++){
   ctx.beginPath();
   ctx.strokeStyle=`rgba(120,190,255,${0.15-i*0.03})`;
   ctx.lineWidth=2;
   ctx.ellipse(this.x,this.y-10,this.fieldRadius-(i*16),70+(i*12),0,0,Math.PI*2);
   ctx.stroke();
  }

  // particles
  this.particles.forEach(p=>{
   p.angle+=p.speed;
   const px=this.x+Math.cos(p.angle)*(p.radius+Math.sin(this.phase+p.radius)*10);
   const py=this.y+Math.sin(p.angle)*(p.radius*0.45);
   ctx.fillStyle=this.color;
   ctx.beginPath();
   ctx.arc(px,py,1.6,0,Math.PI*2);
   ctx.fill();
  });

  // human silhouette
  ctx.strokeStyle='rgba(255,255,255,.92)';
  ctx.lineWidth=5;
  ctx.lineCap='round';

  // head
  ctx.beginPath();
  ctx.arc(this.x,this.y-135,24,0,Math.PI*2);
  ctx.stroke();

  // shoulders torso
  ctx.beginPath();
  ctx.moveTo(this.x-35,this.y-90);
  ctx.quadraticCurveTo(this.x,this.y-70,this.x+35,this.y-90);
  ctx.moveTo(this.x,this.y-110);
  ctx.lineTo(this.x,this.y+30);
  ctx.stroke();

  // arms
  ctx.beginPath();
  ctx.moveTo(this.x-32,this.y-85);
  ctx.quadraticCurveTo(this.x-70,this.y-10,this.x-48,this.y+45);
  ctx.moveTo(this.x+32,this.y-85);
  ctx.quadraticCurveTo(this.x+70,this.y-10,this.x+48,this.y+45);
  ctx.stroke();

  // hips legs
  ctx.beginPath();
  ctx.moveTo(this.x,this.y+30);
  ctx.lineTo(this.x-28,this.y+118);
  ctx.moveTo(this.x,this.y+30);
  ctx.lineTo(this.x+28,this.y+118);
  ctx.stroke();

  // nervous system
  ctx.strokeStyle='rgba(120,255,255,.55)';
  ctx.lineWidth=2;
  ctx.beginPath();
  for(let i=0;i<8;i++){
   ctx.moveTo(this.x,this.y-95+i*18);
   ctx.lineTo(this.x+Math.sin(this.phase+i)*18,this.y-78+i*18);
  }
  ctx.stroke();

  // biophotonic glow
  ctx.beginPath();
  ctx.strokeStyle=this.color;
  ctx.lineWidth=1.5;
  ctx.arc(this.x,this.y-25,this.fieldRadius+Math.sin(this.phase)*6,0,Math.PI*2);
  ctx.stroke();
 }
}
