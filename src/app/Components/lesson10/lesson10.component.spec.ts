import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson10Component } from './lesson10.component';

describe('Lesson10Component', () => {
  let component: Lesson10Component;
  let fixture: ComponentFixture<Lesson10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lesson10Component]
    });
    fixture = TestBed.createComponent(Lesson10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
