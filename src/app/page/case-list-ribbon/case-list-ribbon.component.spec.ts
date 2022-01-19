import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseListRibbonComponent } from './case-list-ribbon.component';

describe('CaseListRibbonComponent', () => {
  let component: CaseListRibbonComponent;
  let fixture: ComponentFixture<CaseListRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseListRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseListRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
