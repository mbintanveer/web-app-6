import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  readDoctorData:any;
  alert: boolean = false;

  constructor(private service:ApiserviceService) { }

  editDoctor() {

  }

  deleteDoctor(doctor:any) {
    this.service.deleteDoctorData(doctor.DocId).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.alert =true;
      this.getAllDoctorData();
    })
  }


  closeAlert() {
    this.alert =false;
  }


  ngOnInit(): void {
    this.getAllDoctorData();
  }

  getAllDoctorData() {
    this.service.getAllDoctorData().subscribe((res)=>{
      console.log(res, "res...")
      this.readDoctorData = res.data;
    });
  }
}
