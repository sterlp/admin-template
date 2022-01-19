import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDateOnlyComponent } from './case-date-only.component';

describe('CaseDateOnlyComponent', () => {
  let component: CaseDateOnlyComponent;
  let fixture: ComponentFixture<CaseDateOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDateOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDateOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
