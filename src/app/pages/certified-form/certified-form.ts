import { Component } from '@angular/core';
import {SecondaryButton} from '../../_components/secondary-button/secondary-button';
import {PrimaryButton} from '../../_components/primary-button/primary-button';
import {FormsModule, NgModel} from '@angular/forms';
import {required} from '@angular/forms/signals';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-certified-form',
  imports: [
    SecondaryButton,
    PrimaryButton,
    FormsModule,
    NgStyle,
    NgClass
  ],
  templateUrl: './certified-form.html',
  styleUrl: './certified-form.css',
})
export class CertifiedForm {
nome: string = "";
atividade: string = "";
atividades: string[] = ['Angular', 'React']

  campoValido(control: NgModel) {
    return control.invalid && control.touched && control.errors
  }

}
