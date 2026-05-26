import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminFormComponent }from '../admin-form/admin-form.component';
import { UserFormComponent } from '../user-from/user-from.component';


@Component({
  selector: 'app-day8-main',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    AdminFormComponent,
    UserFormComponent
  ],

  templateUrl: './day8-main.component.html',
  styleUrls: ['./day8-main.component.css']
})
export class Day8MainComponent {

  selectedRole = '';

  title = 'Registration Form';

  receivedData: any;

  receiveFormData(data: any) {

    this.receivedData = data;

    console.log(data);

  }

}