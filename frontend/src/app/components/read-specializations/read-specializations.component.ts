import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read-specializations',
  templateUrl: './read-specializations.component.html',
  styleUrls: ['./read-specializations.component.css']
})
export class ReadSpecializationsComponent implements OnInit {

  readSpecializationData: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllSpecializationData();
  }

  getAllSpecializationData() {
    this.service.getAllSpecializationData().subscribe((res)=>{
      console.log(res, "res...")
      this.readSpecializationData = res.data;
    });
  }

}
