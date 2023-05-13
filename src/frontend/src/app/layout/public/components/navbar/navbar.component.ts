import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'iar-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  get appLanguages(): string[] {
    return this.translateService.langs;
  };

  get currentLanguage(): string {
    return this.translateService.currentLang;
  }

  constructor(private translateService: TranslateService) {
  }
  changeLang(lang: string) {
    this.translateService.use(lang).subscribe();
  }

}
