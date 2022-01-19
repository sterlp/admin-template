import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLayoutComponent } from './common-layout.component';

describe('CommonLayoutComponent', () => {
  let component: CommonLayoutComponent;
  let fixture: ComponentFixture<CommonLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
