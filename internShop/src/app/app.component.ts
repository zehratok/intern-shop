import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'internShop';

  showToolBarShop: boolean = false;
  showToolBarAdmin: boolean = false;
  ngOnInit(): void {
    //   this.showToolBarShop = true; //for a while
    // this.showToolBarAdmin = true; // for a while
  }

}
