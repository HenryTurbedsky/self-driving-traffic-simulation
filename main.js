import { City } from "./modules/City.js";
import { PlayerInput } from "./modules/PlayerInput.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);

const player = new PlayerInput();

const city = new City();

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

var doSomthingTest = function(input){
    console.log(input);
}
player.subscribe(doSomthingTest);


//Turns off right click context menu
document.body.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});