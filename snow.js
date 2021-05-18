class Snow{
    constructor(x,y){
    var options = {
        restitution: 0.2,
        friction: 0.2
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.image = loadImage("snow4.webp");
    this.width = width
    this.heigth = height
    World.add(world,this.body);

    }
display(){
    var pos = this.body.position

    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,50,50)
    pop()

    if(pos.y > height){
        Matter.Body.setPosition(this.body, {x: random(0,800), y: random(-400,0)})
    }
}
}