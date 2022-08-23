import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'internShop';
  constructor(private authService: AuthService) { }

  showToolBarShop: boolean = false;
  showToolBarAdmin: boolean = false;
  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  logOut() {
    this.authService.logOut();
  }

}
