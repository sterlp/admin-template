import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaselistComponent } from './caselist.component';

describe('CaselistComponent', () => {
  let component: CaselistComponent;
  let fixture: ComponentFixture<CaselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
