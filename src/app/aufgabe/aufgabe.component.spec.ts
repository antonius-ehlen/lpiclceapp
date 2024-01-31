import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeComponent } from './aufgabe.component';

describe('AufgabeComponent', () => {
  let component: AufgabeComponent;
  let fixture: ComponentFixture<AufgabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
