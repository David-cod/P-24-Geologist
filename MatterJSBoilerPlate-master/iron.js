class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':3.0,
          'density':4.0
      }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightGrey");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  