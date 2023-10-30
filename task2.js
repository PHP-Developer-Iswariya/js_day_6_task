class circle{

    constructor(radius,color){

        this.r=radius;
        this.c=color;
        


    }
    getRadius(){
        console.log("Current radius is")
        return this.r;
        
        
    }
    setRadius(s_rad){
        console.log("my new radius is");
        return this.r=s_rad;

    }
    getColors(){
        console.log("Current colors is")
        return this.c;

    }
    setColor(s_col){
        console.log("my new colour is");
        return this.c=s_col;

    }
    getArea(){
        let pi=3.14;
        let radus=this.r;
        console.log(this.r);
        return pi*radus*radus;

    }
    getCircumference(){
        let pi=3.14;
        let radus=pi*this.r*this.r;
        return radus;

    }


}

let circle1=new circle(5,"red");
let get_radius=circle1.getRadius();
console.log(get_radius);
let set_radius=circle1.setRadius(8);
console.log(set_radius);
let get_color=circle1.getColors();
console.log(get_color);
let set_color=circle1.setColor("green");
console.log(set_color);
let find_area=circle1.getArea();
console.log(find_area);
let find_circumference=circle1.getCircumference();
console.log(find_circumference);
