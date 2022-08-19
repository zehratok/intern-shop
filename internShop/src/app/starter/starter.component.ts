import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
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
    private restService: RestService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log(this.loginForm.value);
  }

  login(): void {
    this.restService.login(this.loginForm.value).subscribe((res: any) => {});

    if (1) {
      this.snackbarService.createSnackbar(
        'success',
        'Login successful! Welcome.'
      );
      this.router.navigate(['/shop']);
    } else {
    }
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}
