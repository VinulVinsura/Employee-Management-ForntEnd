
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from "../../comman/nav/nav.component";


@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, NavComponent],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {

  constructor(private http:HttpClient){}

  public employee:any={
    firstName:"",
    lastName:"",
    email:"",
    dep_id:"",
    role_id:""
  }

  addEmployee(){
    this.http.post("http://localhost:9000/emp-controller/add-employee",this.employee).subscribe((data)=>{
      Swal.fire({
        title: "Employee Added Success!",
        text: "You clicked the button!",
        icon: "success"
      });
    })
  }

    
}
