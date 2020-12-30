import { AfterViewInit, Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'at-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
  host: {'class': 'at-sidebar at-mat-dark-theme'}
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private layoutService: LayoutService) { }
  
  ngOnDestroy(): void {
    this.layoutService.sidebar = null;
  }

  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
    this.layoutService.sidebar = this;
  }

}
