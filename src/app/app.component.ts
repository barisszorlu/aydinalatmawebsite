import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   constructor(private translate: TranslateService) {
     var lsIdL = localStorage.getItem('idLanguage');
     if (lsIdL == null || lsIdL == undefined) {
      localStorage.setItem('idLanguage', '1');
     } 
    // translate.addLangs(["tr", "en"]);
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/tr|en/) ? browserLang : "en");
}
  @HostListener('contextmenu', ['$event'])
onRightClick(event) {
  event.preventDefault();
}
}
