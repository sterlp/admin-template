import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTextComponent } from './case-text.component';

describe('CaseTextComponent', () => {
  let component: CaseTextComponent;
  let fixture: ComponentFixture<CaseTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
