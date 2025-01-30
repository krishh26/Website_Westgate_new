import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerWithUsComponent } from './partner-with-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PartnerWithUsComponent }
];

@NgModule({
  declarations: [
    PartnerWithUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PartnerWithUsModule { }
