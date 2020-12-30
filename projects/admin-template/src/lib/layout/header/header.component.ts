import { Component, Input, OnInit, ContentChild, ViewChild, AfterViewInit, Optional, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../layout.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'at-header',
  templateUrl: './header.component.html',
  styleUrls: [],
  host: {'class': 'at-header mat-elevation-z6'}
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() title = '';
  sidebar: SidebarComponent | null = null;
  private _sub? : Subscription;
  
  constructor(private layoutService: LayoutService) { }
  
  ngOnDestroy(): void {
    this.layoutService.header = null;
    this._sub?.unsubscribe();
  }

  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
    this.layoutService.header = this;
    this._sub = this.layoutService.sidebar$.subscribe(v => this.sidebar = v);
  }
}
