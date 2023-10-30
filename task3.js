class Person{
    constructor(name,gender,email,phone,qulification,workexperence){

        this.n=name;
        this.g=gender;
        this.e=email;
        this.p=phone;
        this.q=qulification;
        this.w=workexperence;
        
    }
    getDetails(){
        return this.n,this.g,this.e,this.p,this.q,this.w;

    }
        
}
let person1=new Person("ishu","female","aishu2125@gmail.com","9952264385","B.Tech IT","4+Experence in Web Development");
console.log(person1);
let details=person1.getDetails();
console.log(details);