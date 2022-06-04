import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('stickyHeader') stickyHeaderEl: ElementRef<HTMLDivElement>;

  logoSrc = 'assets/images/logo.svg';
  isHeaderTextBlack = false;
  idLanguage = '1';

  constructor(private readonly router: Router, private translate: TranslateService) {
    var lsIdl = localStorage.getItem('idLanguage');
    if (lsIdl != null) {
      this.idLanguage = lsIdl;
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (this.isWhitePage(event.url)) {
          this.changeToWhiteBackgroundLayout();
        } else {
          this.changeToBlackBackgroundLayout();
        }
      });
  }

  ngOnInit(): void { }

  changeLanguage(idLanguage: number) {
    localStorage.setItem('idLanguage', idLanguage.toString());
    switch (idLanguage?.toString()) {
      case '1':
        this.translate.use('tr');
        break;
      case '2':
        this.translate.use('en');
        break;
      case '3':
        this.translate.use('de');
        break;
      default:
        this.translate.use('tr');
        break;
    }
    this.router.navigate(['']).then(x => window.location.reload())
  }


  @HostListener('document:scroll')
  onDocumentScroll(): void {
    this.toggleHeaderStyle();
  }

  onHeaderLoaded(): void {
    setTimeout(() => {
      this.toggleHeaderStyle();
    }, 100);
  }

  private toggleHeaderStyle(): void {
    if (this.isWhitePage(this.router.url)) {
      if (this.stickyHeaderEl?.nativeElement?.classList?.contains('fixed')) {
        this.changeToBlackBackgroundLayout();
      } else {
        this.changeToWhiteBackgroundLayout();
      }
    }
  }

  private changeToWhiteBackgroundLayout(): void {
    this.logoSrc = 'assets/images/renkli-logo.svg';
    this.isHeaderTextBlack = true;
  }

  private changeToBlackBackgroundLayout(): void {
    this.logoSrc = 'assets/images/logo.svg';
    this.isHeaderTextBlack = false;
  }

  private isWhitePage(url: string) {
    return (
      url.includes('product') ||
      url.includes('contact') ||
      url.includes('aboutus') ||
      url.includes('career') ||
      url.includes('references') ||
      url.includes('sertifikalar') ||
      url.includes('product-group')
    );
  }
}
