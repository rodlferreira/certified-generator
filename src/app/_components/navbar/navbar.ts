import {booleanAttribute, Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
ngOnInit() {
  this.mensagem()
}

//retirar depois
mensagem() {
  console.log('mensagem navbar initialized');
  }
}
