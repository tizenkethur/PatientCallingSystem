import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomScreenComponent } from './room-screen.component';

describe('RoomScreenComponent', () => {
  let component: RoomScreenComponent;
  let fixture: ComponentFixture<RoomScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
