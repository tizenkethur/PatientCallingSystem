import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingControllerComponent } from './calling-controller.component';

describe('CallingControllerComponent', () => {
  let component: CallingControllerComponent;
  let fixture: ComponentFixture<CallingControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallingControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
