import { Component, signal } from '@angular/core';
import {Navbar} from './_components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certified-generator');
}
