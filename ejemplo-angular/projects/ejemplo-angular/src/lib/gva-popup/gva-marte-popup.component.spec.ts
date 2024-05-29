import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GvaPopupComponent } from './gva-marte-popup.component';

describe('GvaPopupComponent', () => {
  let component: GvaPopupComponent;
  let fixture: ComponentFixture<GvaPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GvaPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GvaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
