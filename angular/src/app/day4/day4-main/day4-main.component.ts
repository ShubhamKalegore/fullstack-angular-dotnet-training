import { Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day4-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './day4-main.component.html',
  styleUrl: './day4-main.component.css'
})
export class Day4MainComponent implements OnDestroy {

  constructor(public authService: AuthService) {}

  ngOnDestroy(): void {
    console.log('destroy is called');
    this.authService.protectRoutes = false;
  }

}
