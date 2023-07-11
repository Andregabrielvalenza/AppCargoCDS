import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gui-emision-transportista',
  templateUrl: './gui-emision-transportista.page.html',
  styleUrls: ['./gui-emision-transportista.page.scss'],
})
export class GuiEmisionTransportistaPage implements OnInit {

  constructor() { }
  isModalOpen = false;
  isModalanular = false;
  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  anularOpen(isOpen: boolean) {
    this.isModalanular = isOpen;
  }

}
