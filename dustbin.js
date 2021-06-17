class Box {
    constructor(x,y,w,h){
  var option={
      isStattic:true
      
  }
  
 
  this.body = Bodies.rectangle(x,y,w,h,option);
  this.width = w;
  this.height = h;
 // this.image = loadImage("img/dustbin.png");
  World.add(world,this.body);
  Matter.Body.setStatic(this.body,true);
  this.image = loadImage("dustbingreen.png")
      }
  
  display(){
  var pos = this.body.position;
  

 // image(this.image,1302,600,this.width,this.height);
push();
  rectMode(CENTER);
  fill("red");
  rect(pos.x,pos.y,this.width,this.height);
  imageMode(CENTER);
        image(this.image,1300,580,200,200);
pop();
  
  
  
  }
  
  
  } 