import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'shopping';
  product =
  [
    {   img: "../assets/item2.webp",
        name: "DVRK MONOGRAM POLO - BLACK",
        price: "Price: 120$",
        quantity: "Quantity: 101",
        describe: "Describe: silky,..."
    },

    {   img: "../assets/img5.jpg",
        name: "T-shirt New York Yankees",
        price: "Price: 105$",
        quantity: "Quantity: 87",
        describe: "Describe: cotton,..."
    },

    {   img: "../assets/img3.jpg",
        name: "Drew House Mascot Ss Tee Heather Grey",
        price: "Price: 80$",
        quantity: "Quantity: 31",
        describe: "Describe: cotton,..."
    },

    {   img: "../assets/img5.webp",
        name: "SIGNATURE CORDUROY BOMBER",
        price: "Price: 101$",
        quantity: "Quantity: 101",
        describe: "Describe: fashion,..."
    },

    {   img: "../assets/img4.jpg",
        name: "Drew House Secret SS Tee Navy",
        price: "Price: 100$",
        quantity: "Quantity: 103",
        describe: "Describe: silky,..."
    },

    {   img: "../assets/jg1.jpg",
        name: "Nike Air Jordan 1 Low ‘Black Medium Grey’",
        price: "Price: 100$",
        quantity: "Quantity: 103",
        describe: "Describe: fashion,..."
    },

    {   img: "../assets/yz.jpg",
        name: "Yeezy Boost 350 V2 ‘Salt’",
        price: "Price: 100$",
        quantity: "Quantity: 103",
        describe: "Describe:"
    },

    {   img: "../assets/item4.webp",
        name: "Drew Drew House Bizzy SS Tee ‘Brown Stripe’",
        price: "Price: 197$",
        quantity: "Quantity: 33",
        describe: "Describe: cotton,..."
    },

    
  ]
}


