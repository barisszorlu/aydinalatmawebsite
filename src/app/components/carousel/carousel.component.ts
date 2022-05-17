import { Component, OnInit , ChangeDetectionStrategy , Input } from "@angular/core";
declare const $:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() items = [];
  
  ngOnInit(): void {
  }

  ngAfterViewInit(){
    $('#carouselExampleCaptions').carousel()
  }

}
