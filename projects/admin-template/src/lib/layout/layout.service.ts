import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

/**
 * Provides an Observable to get the last instance of the header or sidebar.
 */
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _header = new BehaviorSubject<HeaderComponent | null>(null);
  private _sidebar = new BehaviorSubject<SidebarComponent | null>(null);

  readonly header$ = this._header.asObservable();
  readonly sidebar$ = this._sidebar.asObservable();

  set header(value: HeaderComponent | null) { 
    this._header.next(value);
  }
  
  set sidebar(value: SidebarComponent | null) {
    this._sidebar.next(value);
  }

  constructor() { }
  
}
