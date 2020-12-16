class Launcher {

    constructor(b1,point) {
        var options = {
            length: 10,
            stiffness: 0.004,
            bodyA: b1,
            pointB: point
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        if(this.chain.bodyA){
        var p1 = this.chain.bodyA.position;
        var p2 = this.chain.pointB;
        stroke("yellow");
        strokeWeight(7);
        line(p1.x, p1.y, p2.x,p2.y);
        }
    }

    fly() {

        this.chain.bodyA = null;
    
      }
      attach(body){
		this.chain.bodyA=body;
	}
    }
