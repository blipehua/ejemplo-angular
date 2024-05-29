import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GvaCabeceraComponent } from './gva-cabecera.component';

describe('GvaCabeceraComponent', () => {
  let component: GvaCabeceraComponent;
  let fixture: ComponentFixture<GvaCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GvaCabeceraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GvaCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
