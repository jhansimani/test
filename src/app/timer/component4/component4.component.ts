import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
@Input() noOfStarts : number =0;
@Input() noOfPauses : number =0;
  constructor() { }

  ngOnInit(): void {
  }

}
