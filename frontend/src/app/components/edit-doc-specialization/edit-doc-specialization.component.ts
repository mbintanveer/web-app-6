import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-doc-specialization',
  templateUrl: './edit-doc-specialization.component.html',
  styleUrls: ['./edit-doc-specialization.component.css']
})
export class EditDocSpecializationComponent implements OnInit {


  readDoc_SpecializationData: any;
  alert:boolean = false;

  constructor(private service: ApiserviceService) { }

  editDoc_Specialization() {

  }

  deleteDoc_Specialization(doc_specialization: any) {
    this.service.deleteDoc_SpecializationData(doc_specialization.DocId,doc_specialization.SpecId).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.alert =true;
      this.getAllDoc_SpecializationData();
    })
  }

  
  closeAlert() {
    this.alert =false;
  }


  ngOnInit(): void {
    this.getAllDoc_SpecializationData();
  }

  getAllDoc_SpecializationData() {
    this.service.getAllDoc_SpecializationData().subscribe((res) => {
      console.log(res, "res...")
      this.readDoc_SpecializationData = res.data;
    });
  }
}
