export class Intersection {
    width = 50;
    height = 50;
    roads = [];
    position = {x:0,y:0};

    constructor(position, roadConnections) {
        this.position = position;
        this.roads = roadConnections;
    }

    getConnectionAt(direction) {
        if(!roads[direction])
            return null;

        const connection = {
            intersection: this,
            direction: direction,
            road: roads[direction]
        }

        return connection;
    }

    setConnectionAt(road, direction) {
        if(roads[direction])
            console.warn("There was already a connection: " + getConnectionAt(direction));
        
        roads[direction] = road;
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, 
            this.width, this.height);
    }
}