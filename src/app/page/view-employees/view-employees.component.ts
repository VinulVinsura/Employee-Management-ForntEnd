import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-employees',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-employees.component.html',
  styleUrl: './view-employees.component.css',
})
export class ViewEmployeesComponent {
  public employeeList: any;

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
          .delete('http://localhost:9000/emp-controller/delete-employee/'+employee.emp_id)
          .subscribe((data) => {
            
            this.lodeEmployeeTable();
          });
        Swal.fire({
          title: `${employee.firstName+" "+employee.lastName} Deleted!`,
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }
}
