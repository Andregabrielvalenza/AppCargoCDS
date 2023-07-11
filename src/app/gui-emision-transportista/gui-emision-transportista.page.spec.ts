import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuiEmisionTransportistaPage } from './gui-emision-transportista.page';

describe('GuiEmisionTransportistaPage', () => {
  let component: GuiEmisionTransportistaPage;
  let fixture: ComponentFixture<GuiEmisionTransportistaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuiEmisionTransportistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
