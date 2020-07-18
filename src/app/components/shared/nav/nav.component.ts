import { Component, OnInit,Input, ViewChild, AfterViewInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartComponent } from 'src/app/components/cart-body/cart/cart.component';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  cart=faShoppingCart;

  cartItems=[
    //  
  ];
  cartTotal=0;
  public itemTotal;

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product:Product)=>{
      this.addProductToCart(product);
      
  })
}


  addProductToCart(products:Product){

    let productExist=false;

    

    for(let i in this.cartItems){
      
      if(this.cartItems[i].id===products.id){
        this.cartItems[i].qty++;
        productExist=true;        
        break;
      }

      //this.itemTotal =this.itemTotal+1;
      
      
    }
    if(!productExist){
      this.cartItems.push({
        id:products.id,
        name:products.name,
        qty:1,
        price:products.price

      })
      //this.itemTotal=1;
    }
    

  this.cartTotal=0;
  //this.itemTotal=0;
  this.cartItems.forEach(item =>{
    this.cartTotal+= (item.qty * item.price)
    
  });

  this.itemTotal=this.cartItems.length;
}

  

}
