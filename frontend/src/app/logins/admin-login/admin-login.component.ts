import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  errormsg:any;
  successmsg:any;
  getparamid:any;
 isLogin: boolean = false;
  data:any;
  msg:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute, private router2:Router) { }



  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('adminId');
    if(this.getparamid){
      this.service.getSingleAdmin_AccountData(this.loginForm.value.adminId).subscribe((res) => {
        console.log('res==> ', res);
        this.loginForm.patchValue({
          adminId:res.data[0].adminId,
          Password:res.data[0].Password,
        });
      });
    } 
  }
 
  loginForm = new FormGroup({
    'adminId': new FormControl('', Validators.required),
    'Password': new FormControl('', Validators.required),
  });
  
  //insert data
  SubmitData() {
    console.log("Testing");
    if(this.loginForm.valid){
      console.log("form ->",this.loginForm.value);
      this.service.getSingleAdmin_AccountData(this.loginForm.value.adminId).subscribe((res) => {
        console.log("res==>", res.message);
        this.loginForm.reset(); //res message = success
        this.successmsg=res.message;
        if(res.message == 'success'){
          this.isLogin = true;
          console.log(this.isLogin);
          this.router2.navigate(['headers/admin-header']).then();
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
