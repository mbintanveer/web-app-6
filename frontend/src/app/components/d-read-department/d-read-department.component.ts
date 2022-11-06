import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-d-read-department',
  templateUrl: './d-read-department.component.html',
  styleUrls: ['./d-read-department.component.css']
})
export class DReadDepartmentComponent implements OnInit {
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
