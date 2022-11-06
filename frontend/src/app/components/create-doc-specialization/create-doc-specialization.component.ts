import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-create-doc-specialization',
  templateUrl: './create-doc-specialization.component.html',
  styleUrls: ['./create-doc-specialization.component.css']
})
export class CreateDocSpecializationComponent implements OnInit {

  errormsg:any;
  successmsg:any;
  getparamid:any;
  getparamid1:any;
 

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
     this.getparamid=this.router.snapshot.paramMap.get('DocId');
     this.getparamid1=this.router.snapshot.paramMap.get('SpecId');
    if(this.getparamid){
     this.service.getSingleDoc_SpecializationData(this.getparamid,this.getparamid1).subscribe((res)=>{
       console.log(res,'res==>');
       this.doc_specializationForm.patchValue({
        DocId:res.data[0].DocId,
        SpecId:res.data[0].SpecId,
       });
     });
   } 
  }

  
  doc_specializationForm = new FormGroup({
    'DocId': new FormControl('', Validators.required),
    'SpecId': new FormControl('', Validators.required)
  });

  SubmitData() {
    console.log(this.doc_specializationForm.value);
    if (this.doc_specializationForm.valid) {
      console.log(this.doc_specializationForm.value);
      this.service.createDoc_SpecializationData(this.doc_specializationForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.doc_specializationForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    }
  }

  UpdateData(){
        console.log(this.doc_specializationForm.value,'updatedform');
       if(this.doc_specializationForm.valid){
         this.service.updateDoc_SpecializationData(this.doc_specializationForm.value,this.getparamid,this.getparamid1).subscribe((res)=>{
          console.log(res,'resupdated');
          this.successmsg=res.message;
         });
       }else{
         this.errormsg='All fields required';
       } 
     } 

}
