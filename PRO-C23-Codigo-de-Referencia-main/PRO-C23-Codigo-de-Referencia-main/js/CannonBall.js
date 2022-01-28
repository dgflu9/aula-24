class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    this.fumaca = [];
    World.add(world, this.body);
  }

  shoot() {
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    if (this.body.velocity.x > 0 && pos.x > 13) {
        var bombPos = [pos.x, pos.y];
        this.fumaca.push (bombPos);
    }

    for (var b = 0; this.fumaca.length; b ++) {
        image (this.image, this.fumaca [b][0], this.fumaca [b][1], 5,5);   
    }
  }
}
