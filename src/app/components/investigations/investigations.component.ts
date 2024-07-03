import { Component, OnInit } from '@angular/core';
import { Investigaciones } from 'src/app/models/investigacion';

@Component({
  selector: 'app-investigations',
  templateUrl: './investigations.component.html',
  styleUrls: ['./investigations.component.css']
})
export class InvestigationsComponent implements OnInit {
investigaciones: any;

  constructor() { }

  ngOnInit(): void {
  }

}
