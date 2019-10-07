import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  searchResponse: any;
  searchData: any;
  liveNews: Object;
  newsData: any;

  constructor( private api : ApiService) { }
  loadPage = false;
  ngOnInit() {
    this.fetchLiveNews()
  }

  searchFlight(data){
    this.loadPage = true;
    this.searchData = data;
    var formVal = {
      "DepartureAirportCode" : data.departure,
      "ArrivalAirportCode" : data.arrival,
      "DepartureDate" : data.depDate,
      "ReturnDate" : data.arrDate
    }
    var reqData = {'params':formVal};

    this.api.getSearchResults(reqData).subscribe(value => {
        this.searchResponse = value;
        this.loadPage = false;
      });
    }

    fetchLiveNews(){
      this.api.getLiveNews().subscribe(value => {
        this.liveNews = value;
        this.newsData = value['articles'];
      });
    }

}
