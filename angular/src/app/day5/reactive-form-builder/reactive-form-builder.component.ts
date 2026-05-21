import { Component, inject } from '@angular/core';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { passwordStrengthValidator } from '../../shared/validators/password.validator';



@Component({
  selector: 'app-reactive-form-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent {

  private fb = inject(FormBuilder);

  form = this.fb.group({

    email: [
      '',
      [Validators.required, Validators.email]
    ],

    password: [
      '',
      [
        Validators.required,
        passwordStrengthValidator
      ]
    ]

  });

  onSubmit() {

    console.log(this.form.value);

  }
}
