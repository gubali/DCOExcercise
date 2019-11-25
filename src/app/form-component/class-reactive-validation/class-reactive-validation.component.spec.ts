import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassReactiveValidationComponent } from './class-reactive-validation.component';

describe('ClassReactiveValidationComponent', () => {
  let component: ClassReactiveValidationComponent;
  let fixture: ComponentFixture<ClassReactiveValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassReactiveValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
