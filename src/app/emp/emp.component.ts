import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  empNo : number;
  empName : string;
  deptName : string;
  projects : Project[];
  isEditMode: boolean;

  constructor() {
    this.empNo = 1;
    this.empName = "Tom";
    this.deptName = "HR";
    this.isEditMode = false;
    this.projects = [
    {projId : 1, projName : "Main", projLocation : "UK"},
    {projId : 2, projName : "System", projLocation : "US"}
    ]

   }

  ngOnInit() {
  }

  toggleEdit() {
    this.isEditMode = ! this.isEditMode;
  }

}

interface Project{
  projId : number;
  projName : string;
  projLocation: string;

}
