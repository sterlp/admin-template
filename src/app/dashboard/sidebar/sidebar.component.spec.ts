import { async, ComponentFixture, TestBed, flushMicrotasks } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { ToggleDirective } from './toggle.directive';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { element, by } from 'protractor';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent, ToggleDirective ],
      imports: [ MatIconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Toggle sub menu', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-dropdown-toggle .nav-item').length).toBe(0);

    compiled.querySelector('.nav-dropdown .nav-dropdown-toggle').click();

    // expect(element('li.nav-item.nav-dropdown').getAttribute('class')).toMatch('open');
    expect(fixture.debugElement.query(By.css('.nav-item.nav-dropdown'))
      .nativeElement.getAttribute('class')).toMatch('open');
  });
});
