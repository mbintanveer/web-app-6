import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-p-read-department',
  templateUrl: './p-read-department.component.html',
  styleUrls: ['./p-read-department.component.css']
})
export class PReadDepartmentComponent implements OnInit {
  readDepartmentData:any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllDepartmentData();
  }

  getAllDepartmentData(){
    this.service.getAllDepartmentData().subscribe((res)=>{
      console.log(res, "res...")
      this.readDepartmentData = res.data;
    });
  }
   
}
