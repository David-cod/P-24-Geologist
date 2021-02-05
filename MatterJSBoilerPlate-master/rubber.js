class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.5,
          'friction':0.5,
          'density':1
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(x, y, radius,options);
  
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  