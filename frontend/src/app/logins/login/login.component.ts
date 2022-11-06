import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router, ActivatedRoute} from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private service:ApiserviceService, private router:ActivatedRoute, private router2:Router) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
 isLogin: boolean = false;
  data:any;
  msg:any;
//  public isLoggedin = true;

  ngOnInit(): void {
     this.getparamid = this.router.snapshot.paramMap.get('PID');
    if(this.getparamid){
      this.service.getSinglePatient_AccountData(this.loginForm.value.PID).subscribe((res) => {
        console.log('res==> ', res);
        this.loginForm.patchValue({
          PID:res.data[0].PID,
          password:res.data[0].password,
        });
      });
    } 
  }

loginForm = new FormGroup({
    'PID': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
  });

  //insert data
  SubmitData() {
    console.log("Testing");
    if(this.loginForm.valid){
      console.log("form ->",this.loginForm.value);
      this.service.getSinglePatient_AccountData(this.loginForm.value.PID).subscribe((res) => {
        console.log("res==>", res.message);
        this.loginForm.reset(); //res message = success
        this.successmsg=res.message;
        if(res.message == 'success'){
          this.isLogin = true;
          console.log(this.isLogin);
          this.router2.navigate(['components/signup']).then();
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
