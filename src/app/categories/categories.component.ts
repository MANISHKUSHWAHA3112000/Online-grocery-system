// import { Component } from '@angular/core';
// import {Router} from'@angular/router';

// @Component({
//   selector: 'app-categories',
//   templateUrl: './categories.component.html',
//   styleUrls: ['./categories.component.css']
// })
// export class CategoriesComponent {
//   categories = ['Electronics', 'Books', 'Clothing', 'Shoes'];

//   constructor(private router: Router) {}

//   onSelectCategory(category: string) {
//     this.router.navigate(['/product', category]);
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = ['Electronics', 'Books', 'Clothing', 'Shoes'];

  products = [
    { name: 'Laptop', category: 'Electronics', img: 'assets/Images/beverages.jpg '},
    { name: 'Headphones', category: 'Electronics', img: 'assets/Images/catego_dairy.jpg ' },
    { name: 'Novel', category: 'Books', img: 'assets/Images/catego_fruits.jpg' },
    { name: 'T-shirt', category: 'Clothing', img: 'assets/products/tshirt.png' },
    { name: 'Sneakers', category: 'Shoes', img: 'assets/products/sneakers.png' },
    { name: 'Jacket', category: 'Clothing', img: 'assets/products/jacket.png' }
  ];

  filteredProducts = this.products; // Initially show all products

  onSelectCategory(category: string) {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }
}

