import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaRecojosPage } from './lista-recojos.page';

describe('ListaRecojosPage', () => {
  let component: ListaRecojosPage;
  let fixture: ComponentFixture<ListaRecojosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaRecojosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
