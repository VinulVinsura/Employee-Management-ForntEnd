
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
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
      console.log(data);
    })
  }

    
}
