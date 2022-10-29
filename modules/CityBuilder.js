import { City } from "./City.js";
import { PlayerInput } from "./PlayerInput.js";
import { Intersection } from "./Intersection.js";


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
                if(this.selection){
                    if(this.selection.objectType == "Intersection"){

                        //return;
                    }
                }

                let selectedObj = this.city.getIntersectionAt(event.mouse.x, event.mouse.y);
                this.selection = new Selection(selectedObj);
                
                console.log(this.selection.objectType);
            }
        }
    }


    draw(ctx){
        this.selection?.draw(ctx);
    }

}


class Selection {

    selectedObj = null;
    objectType = null;
    active = false;

    x = 0;
    y = 0;

    constructor(object){
        this.selectedObj = object;
        
        if(!object) return;
        
        this.objectType = this.selectedObj?.constructor.name;
        this.active = true;

        this.x = object.x;
        this.y = object.y;
    }

    deselect(){
        this.active = false;
    }
    select(){
        this.active = true;
    }

    draw(ctx){
        if(this.objectType == "Intersection"){
            const x = this.x;
            const y = this.y;

            ctx.fillStyle = "rgba(0, 0, 255, 0.3)";
            ctx.fillRect(x, y, Intersection.width, Intersection.height);
            

            ctx.fillStyle = "rgba(0, 255, 0, 1)";
            ctx.fillRect(x+Intersection.width/4, y, Intersection.width/2, Intersection.height/4);
            
            ctx.fillRect(x+Intersection.width*3/4, y+Intersection.height/4, Intersection.width/4, Intersection.height/2);
            
            ctx.fillRect(x+Intersection.width/4, y+Intersection.height*3/4, Intersection.width/2, Intersection.height/4);
            
            ctx.fillRect(x, y+Intersection.height/4, Intersection.width/4, Intersection.height/2);
        }   
    }
}