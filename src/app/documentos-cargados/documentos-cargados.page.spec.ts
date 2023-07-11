import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentosCargadosPage } from './documentos-cargados.page';

describe('DocumentosCargadosPage', () => {
  let component: DocumentosCargadosPage;
  let fixture: ComponentFixture<DocumentosCargadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocumentosCargadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
