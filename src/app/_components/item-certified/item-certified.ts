import { Component } from '@angular/core';
import {SecondaryButton} from '../secondary-button/secondary-button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-certified',
  imports: [
    SecondaryButton,
  ],
  templateUrl: './item-certified.html',
  styleUrl: './item-certified.css',
})
export class ItemCertified {
 id: string ="7";

 constructor(private router: Router) { }

  redirectCertified(){
    this.router.navigate(['/certificates', 7])
  }
}
