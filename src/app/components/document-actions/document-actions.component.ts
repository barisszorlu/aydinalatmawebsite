import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-document-actions',
  templateUrl: './document-actions.component.html',
  styleUrls: ['./document-actions.component.scss']
})
export class DocumentActionsComponent implements OnInit {
  @Input() brochure?: any;
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
