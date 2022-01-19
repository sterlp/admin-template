import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModelComponent } from './dialog-model.component';

describe('DialogModelComponent', () => {
  let component: DialogModelComponent;
  let fixture: ComponentFixture<DialogModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
