import { Component, signal } from '@angular/core';
import {Navbar} from './_components/navbar/navbar';
import {PrimaryButton} from './_components/primary-button/primary-button';
import {SecondaryButton} from './_components/secondary-button/secondary-button';
import {ItemCertified} from './_components/item-certified/item-certified';
import {BaseUi} from './_components/base-ui/base-ui';
import {Certificates} from './pages/certificates/certificates';
import {CertifiedForm} from './pages/certified-form/certified-form';
import {Certificate} from './pages/certificate/certificate';

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, SecondaryButton, ItemCertified, BaseUi, Certificates, CertifiedForm, Certificate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certified-generator');
}
