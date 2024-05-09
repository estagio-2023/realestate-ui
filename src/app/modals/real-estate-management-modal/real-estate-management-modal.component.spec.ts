import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealEstateManagementModalComponent } from './real-estate-management-modal.component';

describe('RealEstateManagementModalComponent', () => {
  let component: RealEstateManagementModalComponent;
  let fixture: ComponentFixture<RealEstateManagementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateManagementModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealEstateManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});