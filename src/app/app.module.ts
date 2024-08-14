import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import {UserEffects} from "./core/store/user.effects";
import {appReducers} from "./app.state";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {NavComponent} from "./shared/nav/nav.component";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        LoadingBarHttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([UserEffects]),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            defaultLanguage: 'en'
        }),
        AppRoutingModule,
        NavComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
