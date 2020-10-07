class Block{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:10
        }
        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        World.add(world,this.body);
        this.image=loadImage("Plucking mangoes/mango.png");
    }
    display(){
        
        push();
        var angle=this.body.angle;
         translate(this.body.position.x,this.body.position.y);
         imageMode(CENTER);
         rotate(angle);
         image(this.image,0,0,this.radius,this.radius)
        pop()
    }
}