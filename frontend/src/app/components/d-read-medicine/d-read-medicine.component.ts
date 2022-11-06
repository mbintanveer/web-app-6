import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-d-read-medicine',
  templateUrl: './d-read-medicine.component.html',
  styleUrls: ['./d-read-medicine.component.css']
})
export class DReadMedicineComponent implements OnInit {

 
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
