import { Component } from '@angular/core';
import {SecondaryButton} from '../../_components/secondary-button/secondary-button';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-certificate',
  imports: [
    SecondaryButton,
    NgOptimizedImage
  ],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css',
})
export class Certificate {

}
