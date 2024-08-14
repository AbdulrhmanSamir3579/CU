import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "../../shared/not-found/not-found.component";

import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {TranslateModule} from "@ngx-translate/core";


const routes: Routes = [
  {
    path: '', component: DashboardHomeComponent,
    children: [
      // { path:'test', loadComponent: () => import('./components/test/tes.component').then(c => c.TEST) },
    ]
  },
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule,
    ],
  exports: [RouterModule]
})
export class DashboardModule {
}
