import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovpollsComponent } from './govpolls.component';

describe('GovpollsComponent', () => {
  let component: GovpollsComponent;
  let fixture: ComponentFixture<GovpollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovpollsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
