import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAngularComponent } from './ejemplo-angular.component';

describe('EjemploAngularComponent', () => {
  let component: EjemploAngularComponent;
  let fixture: ComponentFixture<EjemploAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemploAngularComponent]
    });
    fixture = TestBed.createComponent(EjemploAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
