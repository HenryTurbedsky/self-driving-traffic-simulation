import { City } from "./modules/City.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);

// const cross1 = new Intersection(200,200);
// const cross2 = new Intersection(400,200);
// const cross3 = new Intersection(200,600);
// const road1 = new Road(new Connection(cross1, 1),new Connection(cross2, 3));
// const road2 = new Road(new Connection(cross1, 2),new Connection(cross3, 0));

const city = new City();

const cross1 = city.buildIntersection(200,200);
const cross2 = city.buildIntersection(400,200);
const cross3 = city.buildIntersection(200,600);

city.autoBuildRoad(cross1, cross2);
city.autoBuildRoad(cross1, cross3);
city.autoBuildRoad(cross2, cross3);

setInterval(function(){ 
    city.draw(context);
    // cross1.draw(context);
    // cross2.draw(context);
    // cross3.draw(context);
    // road1.draw(context);
    // road2.draw(context);
}, 100);