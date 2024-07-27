import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovcreatepollComponent } from './govcreatepoll.component';

describe('GovcreatepollComponent', () => {
  let component: GovcreatepollComponent;
  let fixture: ComponentFixture<GovcreatepollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovcreatepollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovcreatepollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
