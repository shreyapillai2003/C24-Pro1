class Dustbin
{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.width=10;
        this.height=30;

        this.body= Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world, this.body);
    }
    display() {
        var pos= this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.heigh);
        pop()
    }
}