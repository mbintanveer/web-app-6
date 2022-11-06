import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read-diagnose',
  templateUrl: './read-diagnose.component.html',
  styleUrls: ['./read-diagnose.component.css']
})
export class ReadDiagnoseComponent implements OnInit {

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
