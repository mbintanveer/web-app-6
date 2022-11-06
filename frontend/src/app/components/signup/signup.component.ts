import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service: ApiserviceService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void  {
    this.getparamid=this.router.snapshot.paramMap.get('PID');
    if(this.getparamid){
     this.service.getSinglePatientData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.signupForm.patchValue({
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

  
  signupForm = new FormGroup({
    'PID': new FormControl('', Validators.required),
    'PName': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'Address': new FormControl('', Validators.required),
    'PhNo': new FormControl('', Validators.required),
    'Age': new FormControl('', Validators.required),
    'Gender': new FormControl('', Validators.required),
  });

  SubmitData() {
      console.log(this.signupForm.value);
      if (this.signupForm.valid) {
        console.log(this.signupForm.value);
        this.service.createPatientData(this.signupForm.value).subscribe((res) => {
          console.log(res, 'data created');
          this.signupForm.reset();
          this.successmsg = res.message;
        });
      }
      else {
        console.log('data not created');
        this.errormsg = 'All fields required';
      } 
  } 

  }

