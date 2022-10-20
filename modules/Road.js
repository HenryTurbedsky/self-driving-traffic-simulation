export class Road {
    width = 20;
    connectionA = null;
    connectionB = null;

    constructor(connectionA, connectionB, color = "DarkSlateGray") {
        this.connectionA = connectionA;
        this.connectionB = connectionB;
        this.color = color;

        connectionA.intersection.addRoadAt(this, connectionA.direction);
        connectionB.intersection.addRoadAt(this, connectionB.direction);

        this.connections = [connectionA, connectionB];
    }

    draw(ctx){
        const posPoints = [];
        this.connections.forEach(con => {
            const inter = con.intersection;
            const pos = {x:inter.x, y:inter.y};
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
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(posPoints[0].x, posPoints[0].y);
        ctx.lineTo(posPoints[1].x, posPoints[1].y);
        ctx.stroke();

        // Debug Text vvvv
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = "red";
        ctx.fillText("A", posPoints[0].x+(posPoints[1].x-posPoints[0].x)/10, posPoints[0].y+(posPoints[1].y-posPoints[0].y)/10+10);
        ctx.strokeText("A", posPoints[0].x+(posPoints[1].x-posPoints[0].x)/10, posPoints[0].y+(posPoints[1].y-posPoints[0].y)/10+10);
        ctx.fillStyle = "blue";
        ctx.fillText("B", posPoints[0].x+(posPoints[1].x-posPoints[0].x)/1.1, posPoints[0].y+(posPoints[1].y-posPoints[0].y)/1.1+10);
        ctx.strokeText("B", posPoints[0].x+(posPoints[1].x-posPoints[0].x)/1.1, posPoints[0].y+(posPoints[1].y-posPoints[0].y)/1.1+10);
    }
}