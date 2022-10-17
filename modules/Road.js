export class Road {
    width = 20;
    connections = [{},{}];

    constructor(connections) {
        this.connections = connections;
    }

    draw(ctx){
        const posPoints = [];
        this.connections.forEach(con => {
            const inter = con.intersection;
            const pos = inter.position;
            const dir = con.direction;

            pos.x += inter.width/2;
            pos.y += inter.height/2;
            if(dir == 0) pos.y -= inter.height/2;
            else if(dir == 1) pos.x += inter.height/2;
            else if (dir == 2) pos.y += inter.height/2;
            else if(dir == 3) pos.x -= inter.height/2;

            posPoints.push(pos);
        });

        ctx.lineWidth = this.width;
        ctx.strokeStyle = "gray";
        ctx.beginPath();
        ctx.moveTo(posPoints[0].x, posPoints[0].y);
        ctx.lineTo(posPoints[1].x, posPoints[1].y);
        ctx.stroke();
    }
}