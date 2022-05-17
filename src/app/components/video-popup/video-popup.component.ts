import { Component, Inject, OnInit, SecurityContext } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.scss'],
})
export class VideoPopupComponent implements OnInit {
  private src: SafeResourceUrl;
  get iframeSrc(): SafeResourceUrl {
    return this.src;
  }

  set iframeSrc(src: SafeResourceUrl) {
    this.src = src;
  }

  constructor(
    private readonly domSanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) private readonly data: { src: string }
  ) {
    this.iframeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.data.src + '?autoplay=1&rel=0');
  }

  ngOnInit(): void {}
}
