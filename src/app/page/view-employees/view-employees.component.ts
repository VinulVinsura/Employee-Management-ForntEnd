import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-employees',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-employees.component.html',
  styleUrl: './view-employees.component.css'
})
export class ViewEmployeesComponent {

   public employeeList:any;

   constructor(private http:HttpClient){
      this.lodeEmployeeTable();
   }

   lodeEmployeeTable(){
       this.http.get("http://localhost:9000/emp-controller/get-employees").subscribe((data)=>{
        console.log(data);
        this.employeeList=data;
       })
   }

}
