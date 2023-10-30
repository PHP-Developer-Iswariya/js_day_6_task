class Price{
    constructor(total_km,editmate_km,Extra_km,pickup,drop,drivername,customer_id){
        this.tk=total_km;
        this.edkm=editmate_km;
        this.ek=Extra_km;
        this.p=pickup;
        this.d=drop;
        this.drivename=drivername;
        this.c_id=customer_id;


    }
    getTotalPrice(){
        let final_amount=0;
        if(this.tk==this.edkm){
            let km_price=this.tk*7;
            let gst=km_price*(10/100);
             final_amount=km_price+gst;
        }
        else if(this.tk!=this.edkm){
           let edm=this.edkm*7;
           let extrakm=this.ek*12;
           let total_amount=edm+extrakm;
           let gst=total_amount*(10/100);
           final_amount=total_amount+gst;

        }
          console.log("you need to pay");
        return final_amount;

    }
}

let uberprice=new Price(85,75,10,"svp nagar","sellur","siva",8765);
let urber_pay_amount=uberprice.getTotalPrice();
console.log(urber_pay_amount);