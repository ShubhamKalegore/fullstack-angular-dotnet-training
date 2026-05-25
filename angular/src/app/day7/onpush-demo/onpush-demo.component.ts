import {
  Component
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { OnpushChildComponent } from './onpush-child/onpush-child.component';

interface UserProfile {
  name: string;
  count: number;
}

@Component({
  selector: 'app-onpush-demo',
  standalone: true,
  imports: [CommonModule, OnpushChildComponent],
  templateUrl: './onpush-demo.component.html',
  styleUrls: ['./onpush-demo.component.css']
})
export class OnpushDemoComponent {

  user: UserProfile = {
    name: 'Admin',
    count: 0
  };

  mutateSameObject() {
    this.user.count++;
  }

  replaceObject() {
    this.user = {
      ...this.user,
      count: this.user.count + 1
    };
  }

  reset() {
    this.user = {
      name: 'Angular Student',
      count: 0
    };
  }
}
