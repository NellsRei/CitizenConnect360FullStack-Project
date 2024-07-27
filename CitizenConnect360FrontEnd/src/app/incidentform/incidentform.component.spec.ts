import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentformComponent } from './incidentform.component';

describe('IncidentformComponent', () => {
  let component: IncidentformComponent;
  let fixture: ComponentFixture<IncidentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
