import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightComponent } from './search-flight.component';
import { SearchFormComponent } from '../../shared/components/search-form/search-form.component';
import { MatError } from '../../../../node_modules/@angular/material/form-field';
import { MatDatepickerModule } from '../../../../node_modules/@angular/material/datepicker';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { AngularMaterialModule } from '../../shared/angular-modules/angular-material.module';
import { AppModule } from '../../app.module';

describe('SearchFlightComponent', () => {
  let component: SearchFlightComponent;
  let fixture: ComponentFixture<SearchFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AngularMaterialModule,
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
