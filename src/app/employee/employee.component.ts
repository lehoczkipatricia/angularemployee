import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // employees = [];
  employees: Employee[] = [];
  url = 'http://localhost:3000/employees';
  fullname = '';
  city = '';
  salary = 0;

  constructor() { }

  ngOnInit(): void {
    fetch(this.url)
    .then(response => response.json()
    .then(result => {
      this.employees = result;
    }));
  }

  addButton(){
    alert("működik");
    fetch(this.url, {
      method: "post",
      body: JSON.stringify({
        fullname: this.fullname,
        city: this.city,
        salary: this.salary
      }), 
      headers: {
        "Content-type": "application/json"
      }

    })
    .then(response => response.json()
    .then(result => {
      console.log(result);
    }))
  }

}
