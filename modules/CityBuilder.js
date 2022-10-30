import { PlayerInput } from "./PlayerInput.js";
import { Selection } from "./Selection.js"
import { IntersectionSelection } from "./IntersectionSelection.js";

export class CityBuilder {
    city = null;

    selection = null;

    constructor(city){
        this.city = city;
        this.input = new PlayerInput();
        this.input.subscribe(this.click.bind(this));
    }

    click(event){
        if(event.click)
        {
            if(event.button == 2){
                this.city.buildIntersection(event.mouse.x, event.mouse.y, true);
            }

            if(event.button == 1){                
                if(this.selection?.active){
                    if(this.selection.checkIfClicked(event.mouse.x, event.mouse.y)){
                        return true;
                    }
                }

                let selectedObj = this.city.getIntersectionAt(event.mouse.x, event.mouse.y);
                if(selectedObj){
                    this.selection = new IntersectionSelection(selectedObj);
                    console.log("New Selection: " + this.selection.objectType);
                }else{
                    this.selection = selectedObj;
                    console.log("Selected empty space");
                }
            }
        }
    }

    draw(ctx){
        this.selection?.draw(ctx);
    }

}