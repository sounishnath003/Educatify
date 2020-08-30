import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCardComponent } from './class-card.component';

describe('ClassCardComponent', () => {
  let component: ClassCardComponent;
  let fixture: ComponentFixture<ClassCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
