import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read-disease',
  templateUrl: './read-disease.component.html',
  styleUrls: ['./read-disease.component.css']
})
export class ReadDiseaseComponent implements OnInit {

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
