import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPaquetePage } from './edit-paquete.page';

describe('EditPaquetePage', () => {
  let component: EditPaquetePage;
  let fixture: ComponentFixture<EditPaquetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditPaquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
