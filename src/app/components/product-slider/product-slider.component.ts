import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent implements OnInit {
  @ViewChild('carousel') carouselElement: ElementRef<HTMLDivElement>;
  @Input() products: any[];
  @Input() productTypeName: any;
  constructor() {}

  ngOnInit(): void {}
}
