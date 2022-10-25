import { City } from "./City.js";
import { PlayerInput } from "./PlayerInput.js";


export class CityBuilder {
    city = null;

    constructor(city){
        this.city = city;
        this.input = new PlayerInput();
        
        // USES BIND
        //this.input.subscribe(this.click.bind(this));
        
        // USES ARROW
        // this.input.subscribe(event=>{
        //     if(event.click)
        //     {
        //         if(event.button == 2)
        //             this.city.buildIntersection(event.mouse.x, event.mouse.y, true);
        //         if(event.button == 1){
        //         }
        //     }
        // });

        this.input.subscribe(event => this.click(event));
    }

    click(event){
        if(event.click)
        {
            if(event.button == 2)
                this.city.buildIntersection(event.mouse.x, event.mouse.y, true);

            if(event.button == 1){

            }
        }
    }
}