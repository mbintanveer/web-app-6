import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-d-read-specializations',
  templateUrl: './d-read-specializations.component.html',
  styleUrls: ['./d-read-specializations.component.css']
})
export class DReadSpecializationsComponent implements OnInit {

  readSpecializationData: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllSpecializationData();
  }

  getAllSpecializationData() {
    this.service.getAllSpecializationData().subscribe((res)=>{
      console.log(res, "res...")
      this.readSpecializationData = res.data;
    });
  }
}
