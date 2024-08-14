import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'CU';
    lang = localStorage.getItem('currentLang') || 'en';

    constructor(private _TranslateService: TranslateService) {
    }

    ngOnInit() {
        this._TranslateService.use(this.lang)
    }
}
