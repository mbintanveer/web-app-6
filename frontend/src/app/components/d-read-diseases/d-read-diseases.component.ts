import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-d-read-diseases',
  templateUrl: './d-read-diseases.component.html',
  styleUrls: ['./d-read-diseases.component.css']
})
export class DReadDiseasesComponent implements OnInit {
  readDiseaseData: any;
 
  constructor(private service:ApiserviceService) { }
  
  ngOnInit(): void {
    this.getAllDiseaseData();
  
  }

  getAllDiseaseData() {
    this.service.getAllDiseaseData().subscribe((res)=>{
      console.log(res, "res...")
      this.readDiseaseData = res.data;
    });
  }
}
