class shooter{
    constructor(x,y,width,height,angle){
    var ground_options ={
    isStatic : true
      }
      this.body = Bodies.rectangle(x,y,100,40,ground_options);
      this.width = 90;
      this.height =20;
      Matter.Body.setAngle(this.body,angle);
  
      World.add(world,this.body);
  }
  display(){
   var pos = this.body.position;  
   var angle =this.body.angle;

   push();
   translate(PI/6);
   rotate(PI/6);
   stroke('black');
   rectMode(CENTER);
   rect(pos.x,pos.y,this.width,this.height);
   pop();
  
  }}