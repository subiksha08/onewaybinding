import { Component, OnInit } from '@angular/core';
import StudentData from './student-details.json';

interface Studentmodel{
  Name:string;
  Age:number;
  Mobile:number;
  Address:string;
}


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  student:Studentmodel[]=StudentData;
}
