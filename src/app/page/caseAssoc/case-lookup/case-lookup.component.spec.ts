import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseLookupComponent } from './case-lookup.component';

describe('CaseLookupComponent', () => {
  let component: CaseLookupComponent;
  let fixture: ComponentFixture<CaseLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
