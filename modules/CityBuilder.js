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
                if(this.selection?.active){
                    if(this.selection.checkIfClicked(event.mouse.x, event.mouse.y)){
                        return true;
                    }else{
                        console.log("Selected Empty Space");
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
    width = 0;
    height = 0;

    buttons = [];

    constructor(object){
        this.selectedObj = object;
        
        if(!object) return;
        
        this.objectType = this.selectedObj?.constructor.name;
        this.active = true;

        this.x = object.x;
        this.y = object.y;

        if(this.objectType == "Intersection"){
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

    checkIfClicked(x, y){
        if(Math.abs((this.x + this.width/2) - x) < this.width/2 && Math.abs((this.y + this.height/2) - y) < this.height/2) {
            for(let i = 0; i < this.buttons.length; i++){
                let isClicked = this.buttons[i].checkIfClicked(x, y);
                if(isClicked) return isClicked;
            }
            return this.clicked();
        }
        return false;
    }
    clicked(){
        console.log("Selection was clicked");
        return true;
    }

    draw(ctx){
        const x = this.x;
        const y = this.y;

        if(this.active) ctx.fillStyle = "rgba(0, 0, 255, 0.3)";
        else ctx.fillStyle = "rgba(255, 0, 0, 0.3)"

        ctx.fillRect(x, y, this.width, this.height);

        this.buttons.forEach(button => {
            button.draw(ctx);
        });
    }
}


class SelectionButton {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    color = "";

    constructor(x, y, width, height, color="rgba(0, 255, 0, 1)"){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.color = color;
    }

    checkIfClicked(x, y){
        if(Math.abs((this.x + this.width/2) - x) < this.width/2 && Math.abs((this.y + this.height/2) - y) < this.height/2) {
            return this.clicked();
        }
        return false;
    }
    clicked(){
        console.log("Button was clicked");
        return true;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}