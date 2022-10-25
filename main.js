import { City } from "./modules/City.js";
import { CityBuilder } from "./modules/CityBuilder.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const city = new City();
const cityBuilder = new CityBuilder(city);

const cross1 = city.buildIntersection(200,200);
const cross2 = city.buildIntersection(400,200);
const cross3 = city.buildIntersection(300,300);

city.autoBuildRoad(cross1, cross2);
city.autoBuildRoad(cross1, cross3);
city.autoBuildRoad(cross2, cross3);

setInterval(function(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    city.draw(context);
}, 20);


//Turns off right click context menu
document.body.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});