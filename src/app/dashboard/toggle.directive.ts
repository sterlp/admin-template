import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

/**
 * Simple directive which toggles a css class on click. Default is 'open'
 */
@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective implements OnInit {
  @Input() appToggle?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.appToggle == '') this.appToggle = 'open';
  }

  @HostListener('click')
  onClick() {
    if (this.el.nativeElement.classList.contains(this.appToggle)) {
      this.renderer.removeClass(this.el.nativeElement, this.appToggle);
    } else {
      this.renderer.addClass(this.el.nativeElement, this.appToggle);
    }
  }
}
