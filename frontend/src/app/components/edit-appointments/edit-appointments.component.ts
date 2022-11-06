import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-appointments',
  templateUrl: './edit-appointments.component.html',
  styleUrls: ['./edit-appointments.component.css']
})
export class EditAppointmentsComponent implements OnInit {

  readAppointmentData:any;
  alert:boolean = false;

  constructor(private service:ApiserviceService) { }

  editAppointments() {
    
  }

  deleteAppointments(appointment: any) {
    this.service.deleteAppointmentData(appointment).subscribe((res) => {
      console.log(res,'deleteres==>');
     this.alert = true;
      this.getAllAppointmentData();
    })
  }

  closeAlert() {
    this.alert =false;
  }

  ngOnInit(): void {
    this.getAllAppointmentData();
  }

  getAllAppointmentData() {
    this.service.getAllAppointmentData().subscribe((res)=>{
      console.log(res, "res...")
      this.readAppointmentData = res.data;
    });
  }

  updateAppointments() {
    
  }
}
