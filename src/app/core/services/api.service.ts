import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://nmflightapi.azurewebsites.net/api/flight';
  liveNewsURL: string = 'https://newsapi.org/v2/top-headlines?country=au&apiKey=6e1cc037fef946069e2c35819c7e8d61';

  constructor(private http: HttpClient) { }


  public getSearchResults(reqData) {
    return this.http.get(`${this.apiURL}`, reqData);
  }

  public getLiveNews() {
    return this.http.get(`${this.liveNewsURL}`);
  }
}
