import { Component, Input, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit {
  @Input() medias : any;
  innerSlider: string = '';
  constructor() {}

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    $('#carouselExampleCaptions').carousel()
  }
}
