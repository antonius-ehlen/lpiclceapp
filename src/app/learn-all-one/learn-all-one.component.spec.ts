import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAllOneComponent } from './learn-all-one.component';

describe('LearnAllOneComponent', () => {
  let component: LearnAllOneComponent;
  let fixture: ComponentFixture<LearnAllOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnAllOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnAllOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
