import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { SearchFlightComponent } from './pages/search-flight/search-flight.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';
import { SearchResultsComponent } from './shared/components/search-results/search-results.component';
import { NewsCardComponent } from './shared/components/news-card/news-card.component';
import { HeaderComponent } from './shared/header/header.component';
import { ConvertUTCPipe } from './shared/pipes/convert-utc.pipe';
import { AngularMaterialModule } from './shared/angular-modules/angular-material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './core/services/api.service';



describe('App component', () => {
    beforeEach(async(() => {
        // The TestBed is the most important of the Angular testing utilities.
        // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
        // The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
        TestBed.configureTestingModule({
            imports: [RouterTestingModule,
                MatToolbarModule,
                MatCardModule,
                PerfectScrollbarModule,
                FormsModule,
                ReactiveFormsModule,
                AngularMaterialModule,
                HttpClientTestingModule
            ],
            declarations: [AppComponent,
                HeaderComponent,
                SearchFlightComponent,
                NewsCardComponent,
                ConvertUTCPipe,
                SearchFormComponent,
                SearchResultsComponent],
            providers: [ApiService]
        }).compileComponents();
    }));

    describe(':', () => {

        // Begin by putting re-usable, preparatory code in a setup function instead of beforeEach().
        // The setup() function returns an object literal with the variables, such as app, that a test might reference.
        // You don't define semi-global variables (e.g., let app,fixture ) in the body of the describe().
        // Then each test invokes setup() in its first line, before continuing with steps that
        // manipulate the test subject and assert expectations.

        function setup() {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            return { fixture, app };
        }

        it('should create the app', async(() => {
            const { app } = setup();
            expect(app).toBeTruthy();
        }));

    });
});
