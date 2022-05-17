import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() highlight: string;
  @Input() paragraph: string;
  @Input() href: string;

  constructor(private translate: TranslateService) {
    var idLanguage = localStorage.getItem('idLanguage');
    switch (idLanguage.toString()) {
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
