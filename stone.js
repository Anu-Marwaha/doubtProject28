class Stone {
  constructor(x,y,r){
    var options={
      isStatic:false,
      restitution:0,
      friction:1,
      density:0.5
    }
    this.body = Bodies.circle(x, y, r/2, options);
    this.r = r;
    this.image = loadImage("sprites/stone.png");
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    //ellipseMode(CENTER);
   // ellipse(0,0,this.r,this.r);
  imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}