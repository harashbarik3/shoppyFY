export class Product {

    id:number;
    name:string;
    price:number;
    discount:number;
    img_url:string;

    constructor(id,name,price,discount,img_url){
        this.id=id;
        this.name=name;
        this.price=price;
        this.discount=discount;
        this.img_url=img_url;

    }
}

