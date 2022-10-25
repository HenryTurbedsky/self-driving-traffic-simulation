import { Intersection } from "./Intersection.js";
import { Road } from "./Road.js";
import { Connection } from "./Connection.js";

export class City {
    intersections = [];
    roads = [];
    
    constructor(){
    }

    buildIntersection(x, y, center=false) {
        let inter;
        if(center)
            inter = new Intersection(x-Intersection.width/2,y-Intersection.height/2);
        else
            inter = new Intersection(x,y);
        
        this.intersections.push(inter);
        return inter;
    }

    buildRoad(connectionA, connectionB){
        const road = new Road(connectionA, connectionB);
        this.roads.push(road);
        return road;
    }

    autoBuildRoad(interA, interB){
        let connectionA = {};
        let connectionB = {};
        
        if(Math.abs(interA.x - interB.x) < Math.abs(interA.y - interB.y)){
            if(interA.y < interB.y){
                connectionA = new Connection(interA, 2);
                connectionB = new Connection(interB, 0);
            }else{
                connectionA = new Connection(interA, 0);
                connectionB = new Connection(interB, 2);
            }
            if(connectionA.valid == false){
                if(interA.x < interB.x){
                    connectionA = new Connection(interA, 1);
                }else{
                    connectionA = new Connection(interA, 3);
                }
            }
            if(connectionB.valid == false){
                if(interA.x < interB.x){
                    connectionB = new Connection(interB, 3);
                }else{
                    connectionB = new Connection(interB, 1);
                }
            }
        }else{
            if(interA.x < interB.x){
                connectionA = new Connection(interA, 1);
                connectionB = new Connection(interB, 3);
            }else{
                connectionA = new Connection(interA, 3);
                connectionB = new Connection(interB, 1);
            }
            if(connectionA.valid == false){
                if(interA.y < interB.y){
                    connectionA = new Connection(interA, 2);
                }else{
                    connectionA = new Connection(interA, 0);
                }
            }
            if(connectionB.valid == false){
                if(interA.y < interB.y){
                    connectionB = new Connection(interB, 0);
                }else{
                    connectionB = new Connection(interB, 2);
                }
            }
        }

        if(connectionA.valid && connectionB.valid){
            return this.buildRoad(connectionA, connectionB);
        }else{
            console.warn("autoBuildRoad failed to make a valid connection");
            return null;
        }
    }

    draw(ctx){
        this.roads.forEach(road => {
            road.draw(ctx);
        });
        this.intersections.forEach(inter => {
            inter.draw(ctx);
        });
    }
} 