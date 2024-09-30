import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  itemsPerpage = 5;
  currentpage = 1;

  products = [
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/catego_snacks.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, 
      imageUrl: "../assets/Images/catego_grocery.jpg",
      inCart: false, 
      cartQuantity: 0 
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/almonds.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/almonds.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/almonds.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/almonds.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/almonds.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/almonds.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/almonds.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    },
    {
      name: 'ProV Select California Almonds (Badami) : 1 kg',
      mrp: 1349,
      price: 679,
      quantity: 1, // Quantity in kg
      imageUrl: "../assets/Images/almonds.jpg",
      inCart: false, // To check if the product is in the cart
      cartQuantity: 0 // To track quantity added to the cart
    }
    // Add more products here
  ];

  constructor() {
   
  }

  ngOnInit(): void {

    
  }

  addToCart(product: any) {
    product.inCart = true; // Mark the product as in the cart
    product.cartQuantity = 1; // Set initial quantity to 1
  }

  increaseQuantity(product: any) {
    product.cartQuantity++;
  }

  decreaseQuantity(product: any) {
    if (product.cartQuantity > 1) {
      product.cartQuantity--;
    } else {
      this.removeFromCart(product); // If quantity is 1 and decrease is pressed, remove product from cart
    }
  }

  removeFromCart(product: any) {
    product.inCart = false; // Mark the product as not in the cart
    product.cartQuantity = 0; // Reset the cart quantity
  }


  get paginationData(){
    const start = (this.currentpage - 1) * this.itemsPerpage;
    const end = start + this.itemsPerpage;

    return this.products.slice(start , end);
  }
  changePage(page: number) {
    this.currentpage = page;
    }
}