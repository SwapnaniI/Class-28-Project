class Tree{
    constructor(r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
    this.body = Bodies.circle(680,665,r,options);   
    this.image = loadImage("tree.png");
    World.add(world,this.body);
    }
    display(){        
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,-150,400,400);        
        pop(); 
    }
}