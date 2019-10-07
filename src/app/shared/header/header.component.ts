import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

export interface Profile {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('plSidenav') public sidenav: ElementRef;
  sideMenuState = 'close';
  categories: any;
  config: any;

  constructor(
    ) { }
  loginLabel;
  ngOnInit() {
  }

  loginError() {
    alert('This feature is not available yet!');
  }


  iconClick(data) {
    switch (data) {
      case 'insta':
        window.open("https://www.instagram.com/nintex/?hl=en", "_blank");
        break;

      case 'fb':
        window.open("https://www.facebook.com/Nintex/", "_blank");
        break;

      case 'notif':
        alert('Notification alert is coming soon');
        break;
    }
  }

}
