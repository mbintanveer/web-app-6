import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read-medicines',
  templateUrl: './read-medicines.component.html',
  styleUrls: ['./read-medicines.component.css']
})
export class ReadMedicinesComponent implements OnInit {

  readMedicineData: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllMedicineData();
  }

  getAllMedicineData() {
    this.service.getAllMedicineData().subscribe((res)=>{
      console.log(res, "res...")
      this.readMedicineData = res.data;
    });
  }

}
