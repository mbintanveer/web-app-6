import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-medicines',
  templateUrl: './edit-medicines.component.html',
  styleUrls: ['./edit-medicines.component.css']
})
export class EditMedicinesComponent implements OnInit {

  readMedicineData:any;
  alert : boolean = false;

  constructor(private service:ApiserviceService) { }

  editMedicine() {

  }

  deleteMedicine(medicine:any) {
    this.service.deleteMedicineData(medicine.MID).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.alert =true;
      this.getAllMedicineData();
    })

  }

  closeAlert() {
    this.alert =false;
  }

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
