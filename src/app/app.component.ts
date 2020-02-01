import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <fab [showFiller]="showFiller"></fab>
    <side-nav [opened]="true" [showFiller]="showFiller" (toggleShowFiller)="onToggleShowFiller()"></side-nav>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = true;

  onToggleShowFiller() {
    console.log('this.showFiller', this.showFiller);
    this.showFiller = !this.showFiller;
  }
}
