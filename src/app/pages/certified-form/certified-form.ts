import { Component, ViewChild} from '@angular/core';
import {SecondaryButton} from '../../_components/secondary-button/secondary-button';
import {PrimaryButton} from '../../_components/primary-button/primary-button';
import {FormsModule, NgForm, NgModel} from '@angular/forms';
import {NgClass} from '@angular/common';
import {CertificateInterface} from '../../interfaces/certificateInterface';
import {CertificateService} from '../../_services/certificate';
import { v4 as uuidv4 } from 'uuid';
import {Router} from '@angular/router';

@Component({
  selector: 'app-certified-form',
  imports: [
    SecondaryButton,
    PrimaryButton,
    FormsModule,
    NgClass
  ],
  templateUrl: './certified-form.html',
  styleUrl: './certified-form.css',
})
export class CertifiedForm {

constructor(private certificateService: CertificateService, private router: Router) { }

@ViewChild('form') form!: NgForm;

certificate: CertificateInterface = {
  id: '',
  atividades: [],
  nome: '',
  dataEmissao: '',
}
atividade: string = '';

  campoValido(control: NgModel) {
    return control.invalid && control.touched && control.errors
  }

  formValido() {
  return this.certificate.atividades.length > 0 && this.certificate.nome.length > 0;
  }

  adicionarAtividade() {
    if (this.atividade.length == 0) {
      return;
    }
  this.certificate.atividades.push(this.atividade);
  this.atividade = ''
  }

  excluirAtividade(index: number) {
    this.certificate.atividades.splice(index, 1);
  }

submit() {
  if (!this.formValido()) {
    return;
  }
  this.certificate.dataEmissao = this.dataAtual()
  this.certificate.id = uuidv4()
  this.certificateService.adicionarCertificado(this.certificate)

  this.router.navigate(['certificates', this.certificate.id])
}

dataAtual() {
  const dataAtual = new Date()
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataAtual.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
}

estadoInicial() {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: '',
    }
}

}
