import { Component } from '@angular/core';
import {SecondaryButton} from '../../_components/secondary-button/secondary-button';
import {PrimaryButton} from '../../_components/primary-button/primary-button';

@Component({
  selector: 'app-certified-form',
  imports: [
    SecondaryButton,
    PrimaryButton
  ],
  templateUrl: './certified-form.html',
  styleUrl: './certified-form.css',
})
export class CertifiedForm {

}
