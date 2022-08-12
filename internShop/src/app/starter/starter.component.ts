import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.sass']
})
export class StarterComponent implements OnInit {

  constructor() { }
  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
  }

  login(): void {
      this.snackbarService.createSnackbar('success', 'Login successful! Welcome.');
      this.router.navigate(['/shop']);
  }
}
