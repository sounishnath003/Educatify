import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css'],
})
export class ClassCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  copyClip(){
    alert("Class code copied!")
  }
}
