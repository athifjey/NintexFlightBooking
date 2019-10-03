import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() searchResult: any;
  @Input() searchData: any;
  currency = "$ ";
  airlineList: any = [];
  filteredAirline: any;
  constructor() { }

  ngOnInit() {
    console.log(this.searchResult)
    this.createFilter();
  }

  createFilter(){
    this.searchResult.map((e) => {
      if (!this.airlineList.includes(e.AirlineName)){
        this.airlineList.push(e.AirlineName)
      }      
    });
  }

}
