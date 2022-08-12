import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    if (1) {
      this.snackbarService.createSnackbar('success', 'Registration Successful! You can login now!');
      this.router.navigate(['/']);

    }
  }
}
