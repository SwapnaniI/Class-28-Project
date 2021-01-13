class Mango{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.4,
            friction : 1,
            density : 0.5
        }
    this.body = Bodies.circle(x,y,10,options);   
    this.x=x;
    this.y=y;
    this.r = 10;
    this.image = loadImage("mango.png");
    World.add(world,this.body);
    }
    display(){ 
        var angle = this.body.angle;
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,40,40);        
        pop() 
    }
    move(){
        Matter.Body.setStatic(this.body,false);
    }
   
}