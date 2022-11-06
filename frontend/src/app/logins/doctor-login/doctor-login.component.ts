import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute, private router2:Router) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
 isLogin: boolean = false;
  data:any;
  msg:any;


  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('DocId');
    if(this.getparamid){
      this.service.getSingleDoctor_AccountData(this.loginForm.value.DocId).subscribe((res) => {
        console.log('res==> ', res);
        this.loginForm.patchValue({
          DocId:res.data[0].DocId,
          Password:res.data[0].Password,
        });
      });
    } 
  }
 
  loginForm = new FormGroup({
    'DocId': new FormControl('', Validators.required),
    'Password': new FormControl('', Validators.required),
  });
  
  //insert data
  SubmitData() {
    console.log("Testing");
    if(this.loginForm.valid){
      console.log("form ->",this.loginForm.value);
      this.service.getSingleDoctor_AccountData(this.loginForm.value.DocId).subscribe((res) => {
        console.log("res==>", res.message);
        this.loginForm.reset(); //res message = success
        this.successmsg=res.message;
        if(res.message == 'success'){
          this.isLogin = true;
          console.log(this.isLogin);
          this.router2.navigate(['headers/doctor-header']).then();
      }
      else if(res.message == 'error' || res.message == 'user not found'){
        this.msg = "Incorrect ID/Password!";
      }
    });
    }
    else{
      this.errormsg = 'All fields are required!';
    }
    
  }
  
  }
  
  
  