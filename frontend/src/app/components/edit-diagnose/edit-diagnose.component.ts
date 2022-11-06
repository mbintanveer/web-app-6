import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-diagnose',
  templateUrl: './edit-diagnose.component.html',
  styleUrls: ['./edit-diagnose.component.css']
})
export class EditDiagnoseComponent implements OnInit {

  readDiagnoseData: any;
 alert:boolean = false;


  constructor(private service:ApiserviceService) { }

  editDiagnose() {
    
  }

  deleteDiagnose(diagnose:any) {
    this.service.deleteDiagnoseData(diagnose.Did,diagnose.AppointmentId).subscribe((res) => {
      console.log(res,'deleteres==>');
      this.alert =true;
      this.getAllDiagnoseData();
    })
  }

  
  closeAlert() {
    this.alert =false;
  }

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
