export class PlayerInput {
    mouse = {x: 0, y: 0};
    button = false;
    mouseDown = false;
    click = false;

    observers = [];

    constructor() {
        onmousemove = (event) => {
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY;
            this.update();
        };
        onmousedown = (event) => {
            this.mouseDown = true;
            this.button = event.buttons;
            this.click = true;
            this.update();
        };
        onmouseup = (event) => {
            this.mouseDown = false;
            this.button = event.buttons;
            this.update();
        };
    }


    subscribe(fn){
        this.observers.push(fn);
    }
    unsubscribe(fn){
        this.observers.filter(i => i !== fn);
    }
    update(){
        this.observers.forEach(observer => {
            observer(this);
            this.click = false;
        });
    }
}
