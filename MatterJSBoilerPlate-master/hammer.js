class Hammer {
    constructor(x,y){
        var options={
            'restitution':2,
            'friction':1.0,
            'density':0.5



        }
        this.x=x
        this.y=y
        this.width=70;
        this.height=50;
        this.body=Bodies.rectangle(mouseX,mouseY,70,50,options)
        World.add(world,this.body);


    }
    display(){
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();


    }



}