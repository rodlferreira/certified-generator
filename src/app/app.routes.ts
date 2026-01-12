import { Routes } from '@angular/router';
import {Certificates} from './pages/certificates/certificates';
import {CertifiedForm} from './pages/certified-form/certified-form';
import {Certificate} from './pages/certificate/certificate';

export const routes: Routes = [
  {
    path: '',
    component: Certificates
  },
  {
    path: 'certificates/new',
    component: CertifiedForm
  },
  {
    path: 'certificates/:id',
    component: Certificate
  }
];
