import { Component } from '@angular/core';
import {SecondaryButton} from '../../_components/secondary-button/secondary-button';
import {PrimaryButton} from '../../_components/primary-button/primary-button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-certified-form',
  imports: [
    SecondaryButton,
    PrimaryButton,
    FormsModule
  ],
  templateUrl: './certified-form.html',
  styleUrl: './certified-form.css',
})
export class CertifiedForm {
nome: string = "";
atividade: string = "";
atividades: string[] = ['Angular', 'React']
}
