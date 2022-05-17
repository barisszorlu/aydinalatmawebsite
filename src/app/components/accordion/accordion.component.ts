import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Accordion } from '../../models/accordion.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() contents: Accordion[];
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

  ngOnInit(): void {}
}
