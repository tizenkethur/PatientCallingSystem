import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialNumberMachineComponent } from './serial-number-machine.component';

describe('SerialNumberMachineComponent', () => {
  let component: SerialNumberMachineComponent;
  let fixture: ComponentFixture<SerialNumberMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialNumberMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialNumberMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
