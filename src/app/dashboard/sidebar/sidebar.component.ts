import { Component, OnInit, Input, Inject, Renderer2, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * https://coreui.io/v1/docs/layout/options/
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2) { }

  // make the side bar full hight
  // app-sidebar-nav-divider 
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'sidebar-fixed');
    this.renderer.addClass(this.document.body, 'sidebar-lg-show');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'sidebar-fixed');
    this.renderer.removeClass(this.document.body, 'sidebar-lg-show');
  }

  private sidebarMinimized = false;
  doMinimize() {
    if (this.sidebarMinimized) this.renderer.removeClass(this.document.body, 'sidebar-minimized');
    else this.renderer.addClass(this.document.body, 'sidebar-minimized');

    this.sidebarMinimized = !this.sidebarMinimized;
  }
}
