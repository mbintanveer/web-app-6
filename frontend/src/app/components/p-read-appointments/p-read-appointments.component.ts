import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-p-read-appointments',
  templateUrl: './p-read-appointments.component.html',
  styleUrls: ['./p-read-appointments.component.css']
})
export class PReadAppointmentsComponent implements OnInit {
  readAppointmentData: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllAppointmentData();
  }

  getAllAppointmentData() {
    this.service.getAllAppointmentData().subscribe((res)=>{
      console.log(res, "res...")
      this.readAppointmentData = res.data;
    });
  }
}
