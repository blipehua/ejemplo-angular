import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GvaTablaComponent } from './gva-tabla.component';

describe('GvaTablaComponent', () => {
  let component: GvaTablaComponent;
  let fixture: ComponentFixture<GvaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GvaTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GvaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
