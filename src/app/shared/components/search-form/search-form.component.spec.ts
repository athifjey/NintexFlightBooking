import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { SearchFormComponent } from './search-form.component';
import { AppModule } from '../../../app.module';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.flightSearchForm.valid).toBeFalsy();
  });


  // Departure field validation
  it('departure field validity', () => {
    let departure = component.flightSearchForm.controls['departure'];
    expect(departure.valid).toBeFalsy();
  });
  it('departure error validity', () => {
    let errors = {};
    let departure = component.flightSearchForm.controls['departure'];
    errors = departure.errors || {};
    expect(errors['required']).toBeTruthy();

    departure.setValue("sdf");
    errors = departure.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();

  });

  // Arrival field validation
  it('arrival field validity', () => {
    let arrival = component.flightSearchForm.controls['arrival'];
    expect(arrival.valid).toBeFalsy();
  });
  it('arrival error validity', () => {
    let errors = {};
    let arrival = component.flightSearchForm.controls['arrival'];
    errors = arrival.errors || {};
    expect(errors['required']).toBeTruthy();

    arrival.setValue("sdf");
    errors = arrival.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  // depDate field validation
  it('depDate field validity', () => {
    let depDate = component.flightSearchForm.controls['depDate'];
    expect(depDate.valid).toBeFalsy();
  });
  it('depDate error validity', () => {
    let errors = {};
    let depDate = component.flightSearchForm.controls['depDate'];
    errors = depDate.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  // arrDate field validation
  it('arrDate field validity', () => {
    let arrDate = component.flightSearchForm.controls['arrDate'];
    expect(arrDate.valid).toBeFalsy();
  });
  it('arrDate error validity', () => {
    let errors = {};
    let arrDate = component.flightSearchForm.controls['arrDate'];
    errors = arrDate.errors || {};
    expect(errors['required']).toBeTruthy();
  });



});
