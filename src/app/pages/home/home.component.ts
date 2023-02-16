import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent 
{
  sneaker =
  [
    {   img: "../assets/jg1.jpg",
        name: "Nike Air Jordan 1 Low ‘Black Medium Grey’",
        price: "Price: 100$",
        quantity: "Quantity: 39",
        describe: "Describe: fashion,..."
    },

    {   img: "../assets/jd12.webp",
        name: "Jordan 1 Retro High OG Chicago Lost and Found",
        price: "Price: 497$",
        quantity: "Quantity: 33",
        describe: "Describe: "
    },

    {   img: "../assets/yz.jpg",
        name: "Yeezy Boost 350 V2 ‘Salt’",
        price: "Price: 100$",
        quantity: "Quantity: 123",
        describe: "Describe:"
    },

    {   img: "../assets/img6.jpg",
        name: "Balenciaga Triple S",
        price: "Price: 937$",
        quantity: "Quantity: 12",
        describe: "Describe: "
    },

    {   img: "../assets/balen2.jpg",
        name: "Balenciaga Speed Trainer",
        price: "Price: 750$",
        quantity: "Quantity: 5",
        describe: "Describe: "
    },

    {   img: "../assets/balen3.webp",
        name: "Balenciaga Speed Trainer 3.0",
        price: "Price: 1050$",
        quantity: "Quantity: 5",
        describe: "Describe: "
    },
  ]
  
  shirt=
  [
    {   
        img: "../assets/item2.webp",
          name: "DVRK Monogram Polo - Black",
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
  
      {   img: "../assets/img4.jpg",
          name: "Drew House Secret SS Tee Navy",
          price: "Price: 100$",
          quantity: "Quantity: 103",
          describe: "Describe: silky,..."
      },
  
      {   img: "../assets/item4.webp",
          name: "Drew House Bizzy SS Tee ‘Brown Stripe’",
          price: "Price: 197$",
          quantity: "Quantity: 10",
          describe: "Describe: cotton,..."
      },
    ]

    like(item: any) 
    {
        console.log("like", item)
    }
}
