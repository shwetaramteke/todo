import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstPracticeComponentComponent } from './myfirst-practice-component.component';

describe('MyfirstPracticeComponentComponent', () => {
  let component: MyfirstPracticeComponentComponent;
  let fixture: ComponentFixture<MyfirstPracticeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfirstPracticeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfirstPracticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
