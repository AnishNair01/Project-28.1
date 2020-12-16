class Boy {

    constructor(x,y,width,height){
        var options = {
            isStatic:true
            
        }
        this.body = Bodies.rectangle(x,y,width/10,height/10,options);
        this.width = width;
        this.height = height
        this.image = loadImage("boy.png");
        World.add(world, this.body);   
    }

    display(){

        var pos1 = this.body.position
        //push()
        //translate(pos1.x,pos1.y);
        imageMode(CENTER);
        image(this.image,pos1.x,pos1.y,this.width,this.height);
       // pop()
    }

}