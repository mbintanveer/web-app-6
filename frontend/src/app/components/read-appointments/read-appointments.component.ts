import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read-appointments',
  templateUrl: './read-appointments.component.html',
  styleUrls: ['./read-appointments.component.css']
})
export class ReadAppointmentsComponent implements OnInit {

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
