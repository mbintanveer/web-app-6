import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-p-read-medicine',
  templateUrl: './p-read-medicine.component.html',
  styleUrls: ['./p-read-medicine.component.css']
})
export class PReadMedicineComponent implements OnInit {

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
