
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {


  public employee:any={
    firstName:"",
    lastName:"",
    email:"",
    depId:"",
    roleId:""
  }

  addEmployee(){
    console.log(this.employee);
  }

    
}
