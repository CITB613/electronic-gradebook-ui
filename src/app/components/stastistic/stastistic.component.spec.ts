import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StastisticComponent } from './stastistic.component';

describe('StastisticComponent', () => {
  let component: StastisticComponent;
  let fixture: ComponentFixture<StastisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StastisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StastisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
