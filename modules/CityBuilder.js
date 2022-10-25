import { City } from "./City.js";
import { PlayerInput } from "./PlayerInput.js";


export class CityBuilder {
    city = null;

    constructor(city){
        this.city = city;
        this.input = new PlayerInput();
        this.input.subscribe(this.buildIntersection.bind(this));
    }

    buildIntersection(event){
        if(event.click)
        {
            this.city.buildIntersection(event.mouse.x, event.mouse.y);
        }
    }
}