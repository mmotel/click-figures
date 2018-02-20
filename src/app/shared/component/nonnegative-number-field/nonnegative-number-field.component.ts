import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cf-nonnegative-number-field',
  template: `
  <mat-form-field>
      <input matInput
        [(ngModel)]="editValue"
        type="number"
        min="0"
        [placeholder]="name">
    </mat-form-field>
  `,
  styleUrls: ['./nonnegative-number-field.component.scss']
})
export class NonnegativeNumberFieldComponent implements OnChanges {

  @Input() name: string = 'Nonnegative number filed';

  @Input() value: number = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  public set editValue (value: number) {
    if (value < 0) {
      value = 0;
    }
    if (this.value !== value) {
      this.value = value;
      this.valueChange.emit(this.value);
    }
  }

  public get editValue (): number {
    return this.value;
  }

  constructor() { }

  ngOnChanges () {
    this.editValue = this.value;
  }
}
