import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassInforComponent } from './class-infor.component';

describe('ClassInforComponent', () => {
  let component: ClassInforComponent;
  let fixture: ComponentFixture<ClassInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
