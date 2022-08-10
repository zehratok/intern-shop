import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    StarterComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class StarterModule { }
