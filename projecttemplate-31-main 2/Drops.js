class Drops{
    constructor(x,y){
 var Option={friction:0.001,restitution:0.1}
        this.rain=Bodies.circle(x,y,5,Option)
        World.add(world,this.rain)
        this.radius=5
    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        }
    }

    display(){
   fill("blue")
   ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
    }
}
