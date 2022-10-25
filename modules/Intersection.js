export class Intersection {
    x = 0;
    y = 0;
    roads = [null, null, null, null]; //index 0 = up, index 1 = right, ...

    constructor(x, y, color = "OldLace") {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    getRoadAt(direction) {
        if(!this.roads[direction])
            return null;
        return this.roads[direction];
    }

    addRoadAt(road, direction) {
        if(this.roads[direction] != null){
            console.warn(`There allready is a connection for direction: ${direction}`);
        }else{
            this.roads[direction] = road;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 
            Intersection.width, Intersection.height);
    }
}

Intersection.width = 50;
Intersection.height = 50;