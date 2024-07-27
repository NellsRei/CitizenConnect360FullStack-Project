import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovpollsresultsComponent } from './govpollsresults.component';

describe('GovpollsresultsComponent', () => {
  let component: GovpollsresultsComponent;
  let fixture: ComponentFixture<GovpollsresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovpollsresultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovpollsresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
