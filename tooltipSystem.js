
export class TooltipSystem {
    constructor(element){
        this.element = element;
    }

    update(engine){
        if(engine.active){
            this.element.innerHTML = `
            <strong>Simulation Active</strong><br>
            The two human field models are now entering symbolic resonance proximity. Their surrounding particle fields are beginning to synchronize visually.
            `;
        } else {
            this.element.innerHTML = `
            Hover systems, educational overlays, and advanced simulation explanations will expand here in future engine updates.
            `;
        }
    }
}
