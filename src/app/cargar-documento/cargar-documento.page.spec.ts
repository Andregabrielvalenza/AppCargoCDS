import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargarDocumentoPage } from './cargar-documento.page';

describe('CargarDocumentoPage', () => {
  let component: CargarDocumentoPage;
  let fixture: ComponentFixture<CargarDocumentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargarDocumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
