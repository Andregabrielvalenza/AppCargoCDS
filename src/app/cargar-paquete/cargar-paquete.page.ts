import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargar-paquete',
  templateUrl: './cargar-paquete.page.html',
  styleUrls: ['./cargar-paquete.page.scss'],
})
export class CargarPaquetePage implements OnInit {

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
