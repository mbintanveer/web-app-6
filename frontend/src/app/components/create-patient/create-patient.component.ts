import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
 
  
  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('PID');
    if(this.getparamid){
     this.service.getSinglePatientData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.patientForm.patchValue({
        PID:res.data[0].PID,
        PName:res.data[0].PName,
        password:res.data[0].password,
        Age:res.data[0].Age,
        Gender:res.data[0].Gender,
        Address:res.data[0].Address,
        PhNo:res.data[0].PhNo,
       });
     });
   }
  }

  
  patientForm = new FormGroup({
    'PID': new FormControl('', Validators.required),
    'PName': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'Address': new FormControl('', Validators.required),
    'PhNo': new FormControl('', Validators.required),
    'Age': new FormControl('', Validators.required),
    'Gender': new FormControl('', Validators.required)
  });

  SubmitData() {
    console.log(this.patientForm.value);
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      this.service.createPatientData(this.patientForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.patientForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    } 
  }

  UpdateData(){
    console.log(this.patientForm.value,'updatedform');
    if(this.patientForm.valid){
      this.service.updatePatientData(this.patientForm.value,this.getparamid).subscribe((res)=>{
       console.log(res,'resupdated');
       this.successmsg=res.message;
      });
    }else{
      this.errormsg='All fields required';
    }
  }
 

}