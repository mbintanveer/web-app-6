import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-create-diagnose',
  templateUrl: './create-diagnose.component.html',
  styleUrls: ['./create-diagnose.component.css']
})
export class CreateDiagnoseComponent implements OnInit {
  
  errormsg:any;
  successmsg:any;
  getparamid:any;
  getparamid1: any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
     this.getparamid=this.router.snapshot.paramMap.get('Did');
     this.getparamid1=this.router.snapshot.paramMap.get('AppointmentId');
    if(this.getparamid){
     this.service.getSingleDiagnoseData(this.getparamid,this.getparamid1).subscribe((res)=>{
       console.log(res,'res==>');
       this.diagnoseForm.patchValue({
        AppointmentId:res.data[0].AppointmentId,
         Did:res.data[0].Did,
  
       });
     });
   } 
  }

  
  diagnoseForm = new FormGroup({
    'AppointmentId': new FormControl('', Validators.required),
    'Did': new FormControl('', Validators.required)
  });

  SubmitData() {
    console.log(this.diagnoseForm.value);
    if (this.diagnoseForm.valid) {
      console.log(this.diagnoseForm.value);
      this.service.createDiagnoseData(this.diagnoseForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.diagnoseForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    }
  }


  UpdateData(){
    console.log(this.diagnoseForm.value,'updatedform');
    if(this.diagnoseForm.valid){
      this.service.updateDiagnoseData(this.diagnoseForm.value,this.getparamid,this.getparamid1).subscribe((res)=>{
       console.log(res,'resupdated');
       this.successmsg=res.message;
      });
    }else{
      this.errormsg='All fields required';
    }
  } 
  }

