import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-d-read-patient',
  templateUrl: './d-read-patient.component.html',
  styleUrls: ['./d-read-patient.component.css']
})
export class DReadPatientComponent implements OnInit {

  readPatientData: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllPatientData();
  }

  getAllPatientData() {
    this.service.getAllPatientData().subscribe((res)=>{
      console.log(res, "res...")
      this.readPatientData = res.data;
    });
  }

}
