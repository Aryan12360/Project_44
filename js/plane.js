class Plane {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.planeImg = loadImage("assets/plane.png");
    }

    display() {
        if (keyIsDown(DOWN_ARROW) && this.y < 498) {
            this.y = this.y + 5;
        }

        if (keyIsDown(UP_ARROW) && this.y > 99) {
            this.y = this.y - 5;
        }

        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.planeImg, 0, 0, this.w, this.h);
        pop();
    }
}