import { Component, OnInit} from '@angular/core';

import {ItemCertified} from '../../_components/item-certified/item-certified';
import {SecondaryButton} from '../../_components/secondary-button/secondary-button';
import {RouterLink} from '@angular/router';
import {CertificateService} from '../../_services/certificate';
import {CertificateInterface} from '../../interfaces/certificateInterface';

@Component({
  selector: 'app-certificates',
  imports: [
    ItemCertified,
    SecondaryButton,
    RouterLink
  ],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates implements OnInit {

  certificates: CertificateInterface[] = [];

  constructor(private  certificateService: CertificateService) {
  }

  ngOnInit() {
    this.certificates = this.certificateService.certificates
  }
}
