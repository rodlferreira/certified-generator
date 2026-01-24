import { Component, OnInit, signal } from '@angular/core';
import {Navbar} from './_components/navbar/navbar';
import {BaseUi} from './_components/base-ui/base-ui';
import {RouterOutlet} from '@angular/router';
import {CertificateService} from './_services/certificate';

@Component({
  selector: 'app-root',
  imports: [Navbar, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('certified-generator');

  constructor(private certificateService: CertificateService) { }

  ngOnInit() {
  const certificates = localStorage.getItem('certificates');
  this.certificateService.certificates = certificates ? JSON.parse(certificates) : [];
  }
}
