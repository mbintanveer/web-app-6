import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  
  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('DocId');
    if(this.getparamid){
     this.service.getSingleDoctorData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.doctorForm.patchValue({
         DocId:res.data[0].DocId,
         DocName:res.data[0].DocName,
         Address:res.data[0].Address,
         PhNo:res.data[0].PhNo,
         Age:res.data[0].Age,
         Gender:res.data[0].Gender,
         DepId:res.data[0].DepId
       });
     });
   }
  }

  
  doctorForm = new FormGroup({
    'DocId': new FormControl('', Validators.required),
    'DocName': new FormControl('', Validators.required),
   // 'password': new FormControl('', Validators.required),
    'Address': new FormControl('', Validators.required),
    'PhNo': new FormControl('', Validators.required),
    'Age': new FormControl('', Validators.required),
    'Gender': new FormControl('', Validators.required),
    'DepId': new FormControl('', Validators.required)
  });
  
  SubmitData() {
    console.log(this.doctorForm.value);
    if (this.doctorForm.valid) {
      console.log(this.doctorForm.value);
      this.service.createDoctorData(this.doctorForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.doctorForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    }
  }

  UpdateData(){
    console.log(this.doctorForm.value,'updatedform');
    if(this.doctorForm.valid){
      this.service.updateDoctorData(this.doctorForm.value,this.getparamid).subscribe((res)=>{
       console.log(res,'resupdated');
       this.successmsg=res.message;
      });
    }else{
      this.errormsg='All fields required';
    }
  }

}