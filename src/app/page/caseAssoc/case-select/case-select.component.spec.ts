import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSelectComponent } from './case-select.component';

describe('CaseSelectComponent', () => {
  let component: CaseSelectComponent;
  let fixture: ComponentFixture<CaseSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
