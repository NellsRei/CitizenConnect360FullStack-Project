import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovviewsComponent } from './govviews.component';

describe('GovviewsComponent', () => {
  let component: GovviewsComponent;
  let fixture: ComponentFixture<GovviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
