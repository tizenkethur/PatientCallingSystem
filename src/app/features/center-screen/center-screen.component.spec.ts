import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterScreenComponent } from './center-screen.component';

describe('CenterScreenComponent', () => {
  let component: CenterScreenComponent;
  let fixture: ComponentFixture<CenterScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
