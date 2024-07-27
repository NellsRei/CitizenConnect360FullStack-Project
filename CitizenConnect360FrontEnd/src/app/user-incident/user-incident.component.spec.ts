import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIncidentComponent } from './user-incident.component';

describe('UserIncidentComponent', () => {
  let component: UserIncidentComponent;
  let fixture: ComponentFixture<UserIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserIncidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
