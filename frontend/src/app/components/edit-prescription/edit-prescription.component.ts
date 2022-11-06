import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.css']
})
export class EditPrescriptionComponent implements OnInit {

  readPrescriptionData: any;
  alert:boolean = false;

  constructor(private service: ApiserviceService) { }


  editPrescription() {

  }

  deletePrescription(prescription: any) {
    this.service.deletePrescriptionData(prescription.PresId).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.alert =true;
      this.getAllPrescriptionData();
    })
  }

  closeAlert() {
    this.alert =false;
  }
  ngOnInit(): void {
    this.getAllPrescriptionData();
  }

  getAllPrescriptionData() {
    this.service.getAllPrescriptionData().subscribe((res) => {
      console.log(res, "res...")
      this.readPrescriptionData = res.data;
    });
  }

}
