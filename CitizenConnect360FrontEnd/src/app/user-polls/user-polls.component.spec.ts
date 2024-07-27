import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPollsComponent } from './user-polls.component';

describe('UserPollsComponent', () => {
  let component: UserPollsComponent;
  let fixture: ComponentFixture<UserPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPollsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
