import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-recojos',
  templateUrl: './lista-recojos.page.html',
  styleUrls: ['./lista-recojos.page.scss'],
})
export class ListaRecojosPage implements OnInit {

  constructor() { }

  isModalOpen = false;
  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
