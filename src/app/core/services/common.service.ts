import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // catID: Subject<string> = new Subject<string>();
  
  
  apiURL: string = 'http://nmflightapi.azurewebsites.net/api/flight';
  liveNewsURL: string = 'https://newsapi.org/v2/top-headlines?country=jp&apiKey=6e1cc037fef946069e2c35819c7e8d61';
  catID = new BehaviorSubject<string>('1');
  catName = new BehaviorSubject<string>('すべて');
  selectedItem: any = '';
  constructor( private http: HttpClient) { }

 
  public getSearchResults(reqData) {
    return this.http.get(`${this.apiURL}`, reqData);
  }

  public setCatID(data){
    this.catID.next(data);
  }

  public setCatName(data){
    this.catName.next(data);
  }
  public getLiveNews(){
    return this.http.get(`${this.liveNewsURL}`);
  }
}
