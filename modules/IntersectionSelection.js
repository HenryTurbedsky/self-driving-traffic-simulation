import { Selection, SelectionButton } from "./Selection.js"
import { Intersection } from "./Intersection.js";

export class IntersectionSelection extends Selection {

    constructor(object){
        super(object);
        
        if(this.objectType != "Intersection") console.warn("Object Type (" + this.objectType + ") is not (Intersection)");

        this.width = Intersection.width;
        this.height = Intersection.height;

        const x = this.x;
        const y = this.y;
        
        if(!object.roads[0])
            this.buttons.push(new SelectionButton(x+this.width/4, y, this.width/2, this.height/4));
        if(!object.roads[1])
            this.buttons.push(new SelectionButton(x+this.width*3/4, y+this.height/4, this.width/4, this.height/2));
        if(!object.roads[2])
            this.buttons.push(new SelectionButton(x+this.width/4, y+this.height*3/4, this.width/2, this.height/4));
        if(!object.roads[3])
            this.buttons.push(new SelectionButton(x, y+this.height/4, this.width/4, this.height/2));
    }

}