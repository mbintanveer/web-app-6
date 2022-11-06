import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-specializations',
  templateUrl: './edit-specializations.component.html',
  styleUrls: ['./edit-specializations.component.css']
})
export class EditSpecializationsComponent implements OnInit {

  readSpecializationData: any;
  alert:boolean  = false;

  constructor(private service: ApiserviceService) { }

  editSpecialization() {

  }

  deleteSpecialization(specialization: any) {
    this.service.deleteSpecializationData(specialization.SpecId).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.alert =true;
      this.getAllSpecializationData();
    })
  }

  
  closeAlert() {
    this.alert =false;
  }


ngOnInit(): void {
  this.getAllSpecializationData();
}

getAllSpecializationData() {
  this.service.getAllSpecializationData().subscribe((res) => {
    console.log(res, "res...")
    this.readSpecializationData = res.data;
  });
}

}
