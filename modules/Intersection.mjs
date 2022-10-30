export class Intersection {
    roads = [null, null, null, null]; //index 0 = up, index 1 = right, ...

    bounds = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }

    constructor(x, y, color = "OldLace") {
        this.x = x;
        this.y = y;
        this.bounds.x = x;
        this.bounds.y = y;
        this.bounds.height = Intersection.height;
        this.bounds.width = Intersection.width
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
