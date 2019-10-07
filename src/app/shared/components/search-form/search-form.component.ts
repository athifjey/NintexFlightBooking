import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  flightSearchForm: FormGroup;
  data: any;
  today: any;
  @Output() searchForm = new EventEmitter();
  depDate: any;
  arrDate: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loadForm();
    this.today = new Date();
  }

  loadForm() {
    this.flightSearchForm = this.fb.group({
      departure: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      arrival: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      depDate: ['', Validators.compose([
        Validators.required
      ])],
      arrDate: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  onSubmit(form) {
    if (this.depDate > this.arrDate) {
      alert("The departure date cannot be greater than return date!")
    } else {
      this.searchForm.emit(form.value);
    }
  }

  depDateChange(a, b) {
    this.depDate = a.value;
  }
  arrDateChange(a, b) {
    this.arrDate = a.value;
  }
}
