import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpolicyComponent } from './getpolicy.component';

describe('GetpolicyComponent', () => {
  let component: GetpolicyComponent;
  let fixture: ComponentFixture<GetpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
