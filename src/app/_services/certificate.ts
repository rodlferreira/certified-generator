import { Injectable } from '@angular/core';
import {CertificateInterface} from '../interfaces/certificateInterface';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {

  certificates: CertificateInterface[] = [];

  constructor() {
  }

  adicionarCertificado(certificate: CertificateInterface) {
    this.certificates.push({...certificate});
    localStorage.setItem('certificate', JSON.stringify(this.certificates));
  }
}
