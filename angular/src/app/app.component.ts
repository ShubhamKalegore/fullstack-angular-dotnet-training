import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './day1/header/header';
import { Footer } from './day1/footer/footer';
import { CustomDirective } from './day1/custom-directive/custom-directive';
import { Home } from './day1/home/home';
import { UserForm } from './day1/user-form/user-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Home, UserForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
