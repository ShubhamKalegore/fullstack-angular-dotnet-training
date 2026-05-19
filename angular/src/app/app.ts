import { Component } from '@angular/core';

import { Header } from './day1/header/header';
import { Home } from './day1/home/home';
import { Footer } from './day1/footer/footer';
import { UserForm } from './day1/user-form/user-form';
import { HighlightDirective } from './day1/highlight';
import { CustomDirective } from './day1/custom-directive/custom-directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Home, Footer, UserForm, HighlightDirective, CustomDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}