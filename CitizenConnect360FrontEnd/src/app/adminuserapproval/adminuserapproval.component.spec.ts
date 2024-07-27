import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserapprovalComponent } from './adminuserapproval.component';

describe('AdminuserapprovalComponent', () => {
  let component: AdminuserapprovalComponent;
  let fixture: ComponentFixture<AdminuserapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminuserapprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminuserapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
