class wheelA{
    constructor(){
        this.x =180;
        this.y =460;
        this.diameter =20;
    }
    display(){
        ellipse(this.x,this.y,this.diameter,this.diameter);
        
        stroke('black');
    }
}