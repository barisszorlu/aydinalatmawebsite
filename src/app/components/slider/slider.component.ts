import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  idLanguage : string = '1';

  constructor(private translate: TranslateService) { 
    this.idLanguage = localStorage.getItem('idLanguage');
    switch (this.idLanguage) {
      case '1':
        this.translate.use('tr');
        break;
      case '2':
        this.translate.use('en');
        break;

      default:
        this.translate.use('tr');
        break;
    }
  }

  ngOnInit(): void {
  }

}
