class Leaf{
    constructor(x,y){
        this.body = Bodies.rectangle(this.x, this.y,50,50);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.image = loadImage("leaf.png");
    }
   
   
    display(){
        push();

        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 50,50)        
        pop();
    }
}