class Rocket {
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }

        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.rocketImg = loadImage("assets/rocket.png");

        World.add(world, this.body);
    }

    shoot() {
        var newAngle = plane.x - 50;
        newAngle = newAngle * (3.14 / 180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
          x: 150,
          y: 0
        });
    }

    display() {
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.rocketImg, pos.x, pos.y, this.w, this.h);
        pop();
    }
}