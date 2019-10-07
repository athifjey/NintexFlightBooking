import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AngularMaterialModule } from './shared/angular-modules/angular-material.module';
import { ConvertUTCPipe } from './shared/pipes/convert-utc.pipe';
import { SearchFlightComponent } from './pages/search-flight/search-flight.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';
import { SearchResultsComponent } from './shared/components/search-results/search-results.component';
import { NewsCardComponent } from './shared/components/news-card/news-card.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PerfectScrollbarModule,
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
    NewsCardComponent,
    ConvertUTCPipe,
    SearchFormComponent,
    SearchResultsComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
 
 
 
*/