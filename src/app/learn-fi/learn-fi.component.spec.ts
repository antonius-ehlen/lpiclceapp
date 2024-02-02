import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFiComponent } from './learn-fi.component';

describe('LearnFiComponent', () => {
  let component: LearnFiComponent;
  let fixture: ComponentFixture<LearnFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnFiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
