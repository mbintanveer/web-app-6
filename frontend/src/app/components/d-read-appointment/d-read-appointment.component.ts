import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-d-read-appointment',
  templateUrl: './d-read-appointment.component.html',
  styleUrls: ['./d-read-appointment.component.css']
})
export class DReadAppointmentComponent implements OnInit {

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
