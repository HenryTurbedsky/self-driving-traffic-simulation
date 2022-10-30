export class Connection {
    intersection = null;
    direction = null;
    isPortOpen = false;
    valid = true;

    constructor(intersection, direction){
        this.intersection = intersection;
        this.direction = direction;

        if(intersection.getRoadAt(direction) == null)
            this.isPortOpen = true;

        if (this.isPortOpen === false)
            this.valid = false;
    }
}
