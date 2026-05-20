
export class SimulationEngine {
    constructor(humans){
        this.humans = humans;
        this.active = false;
        this.coherence = 0;
    }

    toggleSimulation(){
        this.active = !this.active;
    }

    update(){
        if(!this.active) return;

        this.coherence += 0.002;
        this.humans.forEach((human, index) => {
            human.energyPhase += 0.01 + (index * 0.002);
            human.fieldRadius = 80 + Math.sin(this.coherence * 2) * 20;
        });
    }
}
