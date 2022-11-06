import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  readPatientData:any;
  alert:boolean = false;

  constructor(private service:ApiserviceService) { }

  editPatient() {

  }

  deletePatient(patient:any) {
    this.service.deletePatientData(patient.PID).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.alert =true;
      this.getAllPatientData();
    })

  }

  closeAlert() {
    this.alert =false;
  }

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
