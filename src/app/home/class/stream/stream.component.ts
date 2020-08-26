import { Component, OnInit } from '@angular/core';
import { ClassData } from 'src/app/models/classData.model';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
})
export class StreamComponent implements OnInit {
  constructor() {}
  currClassData: ClassData = JSON.parse(localStorage.getItem('currClassData'));
  ngOnInit(): void {}
}
