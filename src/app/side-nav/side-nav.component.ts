import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'side-nav',
  template: `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side" opened="opened" [ngClass]="{'expanded': showFiller}">
        <p>ITA</p>
        <p [ngClass]="{'hide': !showFiller}">Inventory</p>
      </mat-drawer>

      <div class="example-sidenav-content">
        <button type="button" mat-button (click)="drawer.toggle()">
          Toggle Sidenav
        </button>
        <button (click)="toggleShowFiller.emit()" mat-button>
          Toggle Show Filler
        </button>
      </div>

    </mat-drawer-container>
  `,
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() opened: boolean
  @Input() showFiller: boolean

  @Output() toggleShowFiller = new EventEmitter<void>()
}
