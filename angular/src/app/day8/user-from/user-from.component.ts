import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,

  imports: [FormsModule],

  templateUrl: './user-from.component.html',
  styleUrl: './user-from.component.css'
})
export class UserFormComponent {

  @Input()
  title = '';

  @Output()
  formSubmitted = new EventEmitter<any>();

  user = {
    name: '',
    city: ''
  };

  submitForm() {

    this.formSubmitted.emit(this.user);

  }

}