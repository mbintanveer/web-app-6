import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-p-read-disease',
  templateUrl: './p-read-disease.component.html',
  styleUrls: ['./p-read-disease.component.css']
})
export class PReadDiseaseComponent implements OnInit {

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
