import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemebershipRegistrationComponent } from './memebership-registration.component';

describe('MemebershipRegistrationComponent', () => {
  let component: MemebershipRegistrationComponent;
  let fixture: ComponentFixture<MemebershipRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemebershipRegistrationComponent]
    });
    fixture = TestBed.createComponent(MemebershipRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
