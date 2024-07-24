import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptverificationComponent } from './optverification.component';

describe('OptverificationComponent', () => {
  let component: OptverificationComponent;
  let fixture: ComponentFixture<OptverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
