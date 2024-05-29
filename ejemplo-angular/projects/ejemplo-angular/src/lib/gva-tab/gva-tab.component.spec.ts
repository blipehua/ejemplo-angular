import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GvaTabComponent } from './gva-tab.component';

describe('GvaTabComponent', () => {
  let component: GvaTabComponent;
  let fixture: ComponentFixture<GvaTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GvaTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GvaTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
