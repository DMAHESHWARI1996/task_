import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
 
  datas0: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.selectedItem = navParams.get('item');
    
    this.datas0 = [
      { img: "../../assets/imgs/download (1).jpg", dish: "Mixing spicy Burger",loc:"california",price:"$37" },
      {img: "../../assets/imgs/download (3).jpg", dish: "Garlic Bread Spagette",loc:"China Town",price:"$50" },
      { img: "../../assets/imgs/download (1).jpg", dish: "Veg. Gujrati khandv",loc:"Downtown",price:"$87"  },
      { img: "../../assets/imgs/download (1).jpg", dish: "Mk spicy Sandwhich",loc:"Indusland",price:"$56"  }
    ];
  }
  addToCart()
  {

  }
  openCartPage()
  {
    this.navCtrl.push(CartPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
