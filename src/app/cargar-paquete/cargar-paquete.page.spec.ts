import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargarPaquetePage } from './cargar-paquete.page';

describe('CargarPaquetePage', () => {
  let component: CargarPaquetePage;
  let fixture: ComponentFixture<CargarPaquetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargarPaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
