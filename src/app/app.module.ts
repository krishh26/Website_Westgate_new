import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { PricingModule } from './modules/pricing/pricing.module';
import { PartnerWithUsModule } from './modules/partner-with-us/partner-with-us.module';
import { ServicesModule } from './modules/services/services.module';
import { FaqModule } from './modules/faq/faq.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactUsModule,
    AboutUsModule,
    PricingModule,
    PartnerWithUsModule,
    ServicesModule,
    FaqModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
