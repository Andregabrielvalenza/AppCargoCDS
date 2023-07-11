import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaGuiEmisionPage } from './lista-gui-emision.page';

describe('ListaGuiEmisionPage', () => {
  let component: ListaGuiEmisionPage;
  let fixture: ComponentFixture<ListaGuiEmisionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaGuiEmisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
