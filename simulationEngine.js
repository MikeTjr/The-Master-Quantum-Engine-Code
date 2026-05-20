
export class SimulationEngine{
 constructor(humans){
  this.humans=humans;
  this.active=false;
  this.time=0;
 }

 toggleSimulation(){
  this.active=!this.active;
 }

 update(){
  this.time+=0.01;
  if(!this.active)return;

  this.humans.forEach((h,i)=>{
   h.fieldRadius=140+Math.sin(this.time*2+i)*18;
   h.x += Math.sin(this.time+i)*0.2;
  });
 }

 drawConnections(ctx){
  const [a,b]=this.humans;
  const dx=b.x-a.x;
  const dy=b.y-a.y;
  const d=Math.sqrt(dx*dx+dy*dy);

  if(d<420){
   ctx.strokeStyle='rgba(183,140,255,.45)';
   ctx.lineWidth=2;

   for(let i=0;i<5;i++){
    ctx.beginPath();
    ctx.moveTo(a.x,a.y-40+i*10);
    ctx.bezierCurveTo(
      a.x+d*0.25,a.y-120,
      b.x-d*0.25,b.y-120,
      b.x,b.y-40+i*10
    );
    ctx.stroke();
   }
  }
 }
}
