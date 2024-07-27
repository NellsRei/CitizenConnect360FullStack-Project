import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovincidentsummaryComponent } from './govincidentsummary.component';

describe('GovincidentsummaryComponent', () => {
  let component: GovincidentsummaryComponent;
  let fixture: ComponentFixture<GovincidentsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovincidentsummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovincidentsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
