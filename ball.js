class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0,
          density:0.1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = width;
      this.height = height;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(200);
      ellipse(pos.x, pos.y, this.radius);
    }
  };