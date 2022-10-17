import { Intersection } from "./modules/Intersection.js";
import { Road } from "./modules/Road.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);

const cross1 = new Intersection({x:200,y:200}, [null,null,null,null]);
const cross2 = new Intersection({x:500,y:200}, [null,null,null,null]);
const road1 = new Road([{intersection: cross1, direction: 1},{intersection: cross2, direction: 3}]);

cross1.draw(context);
cross2.draw(context);
road1.draw(context);