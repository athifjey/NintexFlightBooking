import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})

export class NewsCardComponent implements OnInit {

  @Input() newsData: { "author": any ; "title": string; "description": string; "url": string; "urlToImage": string; "publishedAt": string; "content": string; };
  
  tem: { "author": any ; "title": string; "description": string; "url": string; "urlToImage": string; "publishedAt": string; "content": string; };
  newsDataTitle: string;
  
  constructor() { }


  ngOnInit() {
    this.newsDataTitle = this.newsData.title;
  }
}
