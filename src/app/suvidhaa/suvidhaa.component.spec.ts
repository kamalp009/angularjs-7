import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvidhaaComponent } from './suvidhaa.component';

describe('SuvidhaaComponent', () => {
  let component: SuvidhaaComponent;
  let fixture: ComponentFixture<SuvidhaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuvidhaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvidhaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
