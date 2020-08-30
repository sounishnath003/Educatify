import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassWorkComponent } from './class-work.component';

describe('ClassWorkComponent', () => {
  let component: ClassWorkComponent;
  let fixture: ComponentFixture<ClassWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
