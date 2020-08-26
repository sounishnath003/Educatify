import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  links:any[] = [
    {label:'Stream',path:'stream'},
    {label:'Classwork',path:'class-work'},
    {label:'People',path:'people'}
  ]

  ngOnInit(): void {
  }

}
