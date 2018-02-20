import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'cf-figures-list',
  templateUrl: './figures-list.component.html',
  styleUrls: ['./figures-list.component.scss']
})
export class FiguresListComponent implements OnInit {

  public operations: string[] = ['Area', 'Perimeter'];
  public figures: string[] = ['Circle', 'Square', 'Triangle'];

  public selectedOperation: string = null;
  public selectedFigure: string = null;


  constructor (
    private _router: Router
  ) { }

  ngOnInit () {}

  public onSubmit () {
    const url = `/${this.selectedOperation.toLowerCase()}/${this.selectedFigure.toLowerCase()}`;

    this._router.navigateByUrl(url);
  }

}
