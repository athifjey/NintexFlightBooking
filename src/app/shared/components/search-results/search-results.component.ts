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
  actualSearch: any;
  loadResult = false;
  resultCount: any = 300;
  

  constructor() { }

  ngOnInit() {
    this.actualSearch = this.searchResult;
    // console.log(this.searchResult.length)
    this.createFilter();
  }

  createFilter(){
    this.searchResult.map((e) => {
      if (!this.airlineList.includes(e.AirlineName)){
        this.airlineList.push(e.AirlineName)
      }      
    });
  }

  airlineFilter(e){
    this.loadResult=true;
    this.searchResult = this.actualSearch.filter((f) => {
      return f.AirlineName.includes(e);
    });
    setTimeout(() => {this.loadResult=false;}, 0 );    
  }

}
