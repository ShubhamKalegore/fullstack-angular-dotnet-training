import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  standalone: true,

  imports: [FormsModule],

  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent {

  @Input()
  title = '';

  @Output()
  formSubmitted = new EventEmitter<any>();

  admin = {
    name: '',
    department: ''
  };

  submitForm() {

    this.formSubmitted.emit(this.admin);

  }

}