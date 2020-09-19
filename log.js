class Log {
  constructor(x,y,) {
    var options = {
        isStatic: true,
        restitution:1,
        friction:0,
        density:0.1
    }
    this.body = Bodies.rectangle(x,y,800,20,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   rectMode(CENTER);
    fill(200);
    rect(pos.x, pos.y, 800,20);
  }
};