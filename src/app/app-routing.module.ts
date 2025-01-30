import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'contact-us', loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'about-us', loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'faq', loadChildren: () => import('./modules/faq/faq.module').then(m => m.FaqModule) },
  { path: 'partner-with-us', loadChildren: () => import('./modules/partner-with-us/partner-with-us.module').then(m => m.PartnerWithUsModule) },
  { path: 'pricing', loadChildren: () => import('./modules/pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'services', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
