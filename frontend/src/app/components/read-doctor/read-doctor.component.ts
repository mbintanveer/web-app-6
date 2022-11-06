import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read-doctor',
  templateUrl: './read-doctor.component.html',
  styleUrls: ['./read-doctor.component.css']
})
export class ReadDoctorComponent implements OnInit {

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
