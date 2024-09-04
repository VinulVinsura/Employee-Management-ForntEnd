import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../comman/nav/nav.component';

@Component({
  selector: 'app-view-employees',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NavComponent],
  templateUrl: './view-employees.component.html',
  styleUrl: './view-employees.component.css',
})
export class ViewEmployeesComponent {
  public employeeList: any;
  public selectEmployeeObj: any = {
    emp_id: '',
    firstName: '',
    lastName: '',
    email: '',
    dep_id: '',
    role_id: '',
  };

  constructor(private http: HttpClient) {
    this.lodeEmployeeTable();
  }

  lodeEmployeeTable() {
    this.http
      .get('http://localhost:9000/emp-controller/get-employees')
      .subscribe((data) => {
        this.employeeList = data;
      });
  }

  selectEmployee(employee: any) {
    this.selectEmployeeObj = {
      emp_id: employee.emp_id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      dep_id: employee.dep_id,
      role_id: employee.role_id,
    };
  }

  updateEmployee() {
    this.http
      .post(
        'http://localhost:9000/emp-controller/add-employee',
        this.selectEmployeeObj
      )
      .subscribe((data) => {
        Swal.fire({
          title: 'UPDATE SUCCESS !',
          text: 'You clicked the button!',
          icon: 'success',
        });
        this.lodeEmployeeTable();
        
      });
    
  }

  deleteEmployee(employee: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .delete(
            'http://localhost:9000/emp-controller/delete-employee/' +
              employee.emp_id
          )
          .subscribe((data) => {
            this.lodeEmployeeTable();
          });
        Swal.fire({
          title: `${employee.firstName + ' ' + employee.lastName} DELETED!`,
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }
}
