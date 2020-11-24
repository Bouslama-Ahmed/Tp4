import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  constructor() { }
  @Input() name:string;
  @Input() age:number;
  @Input("checketud") statut:boolean;
  ngOnInit(): void {
  }

}
