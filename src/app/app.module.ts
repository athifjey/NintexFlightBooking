import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface  } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AngularMaterialModule } from './shared/angular-modules/angular-material.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { NewsCardComponent } from './shared/news-card/news-card.component';
import { ConvertUTCPipe } from './shared/pipes/convert-utc.pipe';
import { SearchFlightComponent } from './pages/search-flight/search-flight.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';
import { SearchResultsComponent } from './shared/components/search-results/search-results.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    SwiperModule,
    RouterModule.forRoot([
      {
        path: '', component: SearchFlightComponent        
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFlightComponent,
    ClickOutsideDirective,
    NewsCardComponent,
    ConvertUTCPipe,
    SearchFormComponent,
    SearchResultsComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
 
 
 
*/