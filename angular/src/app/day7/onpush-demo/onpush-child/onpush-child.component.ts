import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

interface UserProfile {
  name: string;
  count: number;
}

@Component({
  selector: 'app-onpush-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onpush-child.component.html',
  styleUrl: './onpush-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushChildComponent {

  @Input() user!: UserProfile;

  get checkedAt() {

    return new Date().toLocaleTimeString();

  }

}
