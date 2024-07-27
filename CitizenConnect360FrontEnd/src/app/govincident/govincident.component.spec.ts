import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovincidentComponent } from './govincident.component';

describe('GovincidentComponent', () => {
  let component: GovincidentComponent;
  let fixture: ComponentFixture<GovincidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovincidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
