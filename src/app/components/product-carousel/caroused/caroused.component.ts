import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-caroused',
  templateUrl: './caroused.component.html',
  styleUrls: ['./caroused.component.scss'],
})
export class CarousedComponent implements OnInit {
  @Input() contentSrc?: string;
  @Input() imgZoomSrc?: string;
  @Input() isVideo?: boolean;
  @Input() medias?: any

  safeSrc: SafeResourceUrl;

  constructor(private readonly domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
     
    if (this.isVideo) {
      const videoSrc = 'https://www.youtube.com/embed/' + this.contentSrc;
      this.safeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(
        videoSrc + '?autoplay=1&rel=0&loop=1&enablejsapi=1&playlist=' + this.contentSrc
      );
    }
  }
}
