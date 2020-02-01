import { Component, Input } from '@angular/core';

@Component({
  selector: 'fab',
  template: `
          <div class="button-container" [ngClass]="{'collapsed': !showFiller}">
            <mat-icon>arrow_left</mat-icon>
          </div>
        `,
  styleUrls: ['./fab.component.scss']
})
export class FabComponent {
  @Input() showFiller: boolean
}
