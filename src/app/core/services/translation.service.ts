import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  defaultLang: string = 'en';
  textDir: string = 'ltr';

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lng');
      if (savedLang) {
        this.defaultLang = savedLang;
      }
      this.translateService.setDefaultLang(this.defaultLang);
      this.translateService.use(this.defaultLang);
      this.setDirection(this.defaultLang);
    }
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
    this.setDirection(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lng', lang);
    }
  }

  private setDirection(lang: string) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('dir', dir);
    }
  }
}
