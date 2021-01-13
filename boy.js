class Boy{
    constructor(){
        var options = {
            isStatic : true
        }
    this.body = Bodies.circle(250,670,20,options);     
    this.image = loadImage("boy.png");
    World.add(world,this.body);
    }
    display(){
        //ellipse(250,670,10,10);
        var angle = this.body.angle
         push();
            translate(this.body.position.x,this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,-20,150,150);
         pop();
    }
}