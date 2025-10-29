import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './components/home/home';
import { GradeComponent } from './components/grade/grade';
import { AboutComponent } from './components/about/about';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, GradeComponent, AboutComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Portfolio Arthur Pires';
}
