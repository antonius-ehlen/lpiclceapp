import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMcComponent } from './learn-mc.component';

describe('LearnMcComponent', () => {
  let component: LearnMcComponent;
  let fixture: ComponentFixture<LearnMcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
