import { Component, OnInit } from '@angular/core';
import { ClassData } from 'src/app/models/classData.model';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  constructor() {}
  links: any[] = [
    { label: 'Stream', path: 'stream' },
    { label: 'Classwork', path: 'class-work' },
    { label: 'People', path: 'people' },
    { label: 'Request', path: 'request' },
    { label: 'Meeting Room', path: 'meeting' },
  ];
  ngOnInit(): void {}
}
