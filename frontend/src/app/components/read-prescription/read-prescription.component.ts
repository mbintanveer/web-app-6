import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read-prescription',
  templateUrl: './read-prescription.component.html',
  styleUrls: ['./read-prescription.component.css']
})
export class ReadPrescriptionComponent implements OnInit {

  readPrescriptionData: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllPrescriptionData();
  }

  getAllPrescriptionData() {
    this.service.getAllPrescriptionData().subscribe((res)=>{
      console.log(res, "res...")
      this.readPrescriptionData = res.data;
    });
  }

}
