import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargadosPaquetesPage } from './cargados-paquetes.page';

describe('CargadosPaquetesPage', () => {
  let component: CargadosPaquetesPage;
  let fixture: ComponentFixture<CargadosPaquetesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargadosPaquetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
