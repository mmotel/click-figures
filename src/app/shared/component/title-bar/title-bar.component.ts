import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cf-title-bar',
  template: `
    <button *ngIf="backUrl"
      mat-mini-fab color="accent"
      [routerLink]="backUrl">
        <mat-icon>&#xE5C4;</mat-icon>
    </button>
    <h2>
      <ng-content></ng-content>
    </h2>
  `,
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  @Input() backUrl: string = null;

  constructor() { }

  ngOnInit() { }

}
