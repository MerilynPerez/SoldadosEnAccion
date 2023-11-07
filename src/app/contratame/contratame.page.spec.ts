import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContratamePage } from './contratame.page';

describe('ContratamePage', () => {
  let component: ContratamePage;
  let fixture: ComponentFixture<ContratamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContratamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
