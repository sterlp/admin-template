import { Component, OnInit, Inject, Renderer2, ElementRef, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
  private showSideBar: boolean = false;
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
    this.showSideBar = !this.showSideBar;
    if (this.showSideBar) {
      this.renderer.addClass(this.document.body, 'sidebar-show');
      this.renderer.removeClass(this.document.body, 'sidebar-hidden');
    } else {
      this.renderer.removeClass(this.document.body, 'sidebar-show');
      this.renderer.addClass(this.document.body, 'sidebar-hidden');
    }
  }

  ngOnInit(): void {
    if (this.fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
    this.toggleSideBar();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }
}