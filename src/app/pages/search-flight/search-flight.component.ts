import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../core/services/common.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  searchResponse: any;
  searchData: any;

  constructor( private common : CommonService) { }
  loadPage = false;
  ngOnInit() {
  }

  searchFlight(data){
    this.searchData = data;
    var formVal = {
      "DepartureAirportCode" : data.departure,
      "ArrivalAirportCode" : data.arrival,
      "DepartureDate" : data.depDate,
      "ReturnDate" : data.arrDate
    }
    var reqData = {'params':formVal};

    this.common.getSearchResults(reqData).subscribe(value => {
        this.searchResponse = value;
      });
    
    }

}
