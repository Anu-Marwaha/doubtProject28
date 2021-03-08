class Slingshot{
    constructor(bodyA,pointA){
        var options = {
            bodyA:bodyA,
            pointA:pointA,
            length:10,
            stiffness:0.04
        }
        //Bodies.circle(100,10,5); //
        this.chain=Constraint.create(options);
     //   this.pointA=pointA;
        World.add(world,this.chain);
    }
        fly(){
        this.chain.bodyA=null;
        }
        attach(body){
            this.chain.bodyA=body;
        }
    }