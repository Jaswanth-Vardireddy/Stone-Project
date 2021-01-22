class Stone
{
constructor(x,y,width,height,color)
{





this.body=Bodies.rectangle(x,y,width,height)
World.add(world,this.body)
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.color=color;
this.image=loadImage("sprites/image1.png")


}
display()
{
var pos=this.body.position
var angle=this.body.angle
push()
rotate(angle)
translate(pos.x,pos.y)
fill(this.color)
imageMode(CENTER)
image(this.image,0,0,50,50)
pop()
}



}