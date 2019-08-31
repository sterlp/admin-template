import { Component, OnInit, Inject, Renderer2, ElementRef, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

/**
 * https://coreui.io/v1/docs/layout/options/
 * Reduced version of:
 * https://github.com/coreui/coreui-angular/tree/master/projects/coreui/angular/src/lib/header
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() fixed: boolean;
  private readonly fixedClass = 'header-fixed';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'app-header');
    renderer.addClass(hostElement.nativeElement, 'navbar');
  }

  toggleSideBar(): void {
    const shown = this.document.body.classList.contains('sidebar-lg-show');
    const shownSmall = this.document.body.classList.contains('sidebar-show');
    const smalScreen = window && window.innerWidth <= 992;

    if (smalScreen) {
      if (shownSmall) {
        this.renderer.removeClass(this.document.body, 'sidebar-show');
      } else {
        this.renderer.addClass(this.document.body, 'sidebar-show');
      }
    } else {
      if (shown || shownSmall) {
        this.renderer.removeClass(this.document.body, 'sidebar-lg-show');
        this.renderer.removeClass(this.document.body, 'sidebar-show');
      } else {
        this.renderer.addClass(this.document.body, 'sidebar-lg-show');
      }
    }
  }

  ngOnInit(): void {
    if (this.fixed) this.renderer.addClass(this.document.body, this.fixedClass);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }
}