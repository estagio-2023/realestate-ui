import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealEstateManagementComponent } from './real-estate-management.component';

describe('RealEstateManagementComponent', () => {
  let component: RealEstateManagementComponent;
  let fixture: ComponentFixture<RealEstateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
