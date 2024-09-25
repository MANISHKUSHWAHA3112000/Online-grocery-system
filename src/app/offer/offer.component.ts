import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, OnDestroy {
  images: string[] = [
    "assets/Images/catego_vegeta.jpg",
    'assets/Images/catego_dairy.jpg',
    'assets/Images/catego_snacks.jpg',
    'assets/Images/beverages.jpg',
    'assets/Images/catego_fruits.jpg'
  ];
  currentIndex = 0;
  intervalId: any;
 
  ngOnInit(): void {
    // Automatically change image every 2 seconds
    this.intervalId = setInterval(() => this.nextImage(), 2000);
  }
 
  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId);
  }
 
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
 
  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
