import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpezarRecojoPage } from './empezar-recojo.page';

describe('EmpezarRecojoPage', () => {
  let component: EmpezarRecojoPage;
  let fixture: ComponentFixture<EmpezarRecojoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmpezarRecojoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
