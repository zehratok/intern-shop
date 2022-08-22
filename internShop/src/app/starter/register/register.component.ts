import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  showPassword: boolean = false;
  UserType: any = ['User', 'Admin'];
  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
    private fb: FormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required || Validators.maxLength(20)],
      password: ['', Validators.required || Validators.minLength(8) && Validators.maxLength(20)],
      userType: ['', Validators.required],
    });
  }
  changeType(e: any) {
    this.UserType?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  get userType() {
    return this.registerForm.get('userType');
  }

  register(): void {
    this.authService.register(this.registerForm.value).subscribe(
      (res) => {
        this.snackbarService.createSnackbar(
          'success',
          'Registration Successful! You can login now!'
        );
        this.router.navigate(['/']);
      },
      (err) => {
        this.snackbarService.createSnackbar(
          'error',
          'Registration Failed! Please try again!'
        );
        this.registerForm.reset();
      }
    );
  }

  showHidePassword(event: any) {
    this.showPassword = !this.showPassword;
    return event.preventDefault();
  }
}
