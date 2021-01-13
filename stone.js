class Stone{
    constructor(r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.5
        }
    this.body = Bodies.circle(205,613,r,options);   
    this.r = r;
    this.image = loadImage("stone.png");
    World.add(world,this.body);
    }
    display(){  
        var angle = this.body.angle;
        //circle(this.body.position.x,this.body.position.y,100)        
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,40,40);        
        pop();  
    }
    move(){
    Matter.Body.setStatic(this.body,false)
    }
    fix(){
    Matter.Body.setStatic(this.body,true)
    }
}