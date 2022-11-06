import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-p-read-diagnosis',
  templateUrl: './p-read-diagnosis.component.html',
  styleUrls: ['./p-read-diagnosis.component.css']
})
export class PReadDiagnosisComponent implements OnInit {

  readDiagnoseData: any;

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getAllDiagnoseData();
  }

  getAllDiagnoseData() {
    this.service.getAllDiagnoseData().subscribe((res) => {
      console.log(res, "res...")
      this.readDiagnoseData = res.data;
    });
  }
}
