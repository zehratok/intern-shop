import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.sass'],
})
export class StarterComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.maxLength(20)],
      password: ['', Validators.maxLength(20)],
    });

    console.log(this.loginForm.value);
  }

  login(): void {
   const isLoggedIn = this.authService.login(this.loginForm.value);
   if(isLoggedIn){
    this.router.navigate(['/shop']);
   }
    

    // if (1) {
    //   this.snackbarService.createSnackbar(
    //     'success',
    //     'Login successful! Welcome.'
    //   );
    //   this.router.navigate(['/shop']);
    // } else {
    // }
  }
  showHidePassword(event: any) {
    this.showPassword = !this.showPassword;
    return event.preventDefault();
  }
}
