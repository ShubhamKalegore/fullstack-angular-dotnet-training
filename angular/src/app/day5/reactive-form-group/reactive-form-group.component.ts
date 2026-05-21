import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { passwordStrengthValidator } from '../../shared/validators/password.validator';



@Component({
  selector: 'app-reactive-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-group.component.html',
  styleUrls: ['./reactive-form-group.component.css']
})
export class ReactiveFormGroupComponent {

  form = new FormGroup({

    email: new FormControl(
      '',
      [Validators.required, Validators.email]
    ),

    password: new FormControl(
      '',
      [
        Validators.required,
        passwordStrengthValidator
      ]
    )

  });

  onSubmit() {

    console.log(this.form.value);

  }
} 