class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.3,
          isStatic : false,
        }
        this.body =  Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visible=255;
        this.wood=loadImage("wood.jpg")
        Matter.World.add(world, this.body);
      }
      display(){
        if(this.body.speed<8){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.wood, 0, 0, 20, 20);
        pop();
        }

        else{
       Matter.World.remove(world,this.body);
       push();
       
       tint (255,this.visible);
       image(this.wood,this.body.position.x,this.body.position.y,20,20);
       //image(this.wood,0,0,20,20);
       this.visible=this.visible-5;
       pop ();
        }
        
        
      }
}
