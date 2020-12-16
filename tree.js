class Tree {

    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,450,10,options);
        this.image = loadImage("tree.png");
        World.add(world, this.body);   
    }

    display(){

        var pos1 = this.body.position
        push()
        translate(pos1.x,pos1.y);
        imageMode(CENTER);
        image(this.image,0,-300,450,600);
        pop()
    }

}