import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-disease',
  templateUrl: './edit-disease.component.html',
  styleUrls: ['./edit-disease.component.css']
})
export class EditDiseaseComponent implements OnInit {

  readDiseaseData:any;
  alert:boolean = false;

  constructor(private service:ApiserviceService) { }

  editDisease() {
    
  }

  deleteDisease(disease:any) {
    this.service.deleteDiseaseData(disease.Did).subscribe((res) => {
      console.log(res,'deleteres==>');
      this.alert =true;
      this.getAllDiseaseData();
    })
  }

  
  closeAlert() {
    this.alert =false;
  }

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
