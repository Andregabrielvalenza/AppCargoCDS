import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargar-documento',
  templateUrl: './cargar-documento.page.html',
  styleUrls: ['./cargar-documento.page.scss'],
})
export class CargarDocumentoPage implements OnInit {

  constructor() { }
  isModalOpen = false;
  ngOnInit() {
  }

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
