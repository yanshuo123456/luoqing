import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JieshaoComponent } from './jieshao.component';

describe('JieshaoComponent', () => {
  let component: JieshaoComponent;
  let fixture: ComponentFixture<JieshaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JieshaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JieshaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
