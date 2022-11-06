import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read-doc-specialization',
  templateUrl: './read-doc-specialization.component.html',
  styleUrls: ['./read-doc-specialization.component.css']
})
export class ReadDocSpecializationComponent implements OnInit {

  readDoc_SpecializationData: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllDoc_SpecializationData();
  }

  getAllDoc_SpecializationData() {
    this.service.getAllDoc_SpecializationData().subscribe((res)=>{
      console.log(res, "res...")
      this.readDoc_SpecializationData = res.data;
    });
  }

}
