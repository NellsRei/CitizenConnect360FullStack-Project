import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEducateComponent } from './user-educate.component';

describe('UserEducateComponent', () => {
  let component: UserEducateComponent;
  let fixture: ComponentFixture<UserEducateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEducateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEducateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
