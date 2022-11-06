import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-p-read-doctor',
  templateUrl: './p-read-doctor.component.html',
  styleUrls: ['./p-read-doctor.component.css']
})
export class PReadDoctorComponent implements OnInit {

  readDoctorData: any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

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
