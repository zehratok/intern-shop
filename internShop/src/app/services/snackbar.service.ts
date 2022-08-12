import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  createSnackbar(type: string, message: string, duration: number = 5000): void {
    this.snackBar.open(message, '', {
      duration,
      panelClass: type
    });
  }
}
