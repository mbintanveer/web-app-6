import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('DepId');
    if(this.getparamid){
     this.service.getSingleDepartmentData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.departmentForm.patchValue({
         DepId:res.data[0].DepId,
         Dname:res.data[0].Dname,
         Location:res.data[0].Location,
       });
     });
   }
  }

  departmentForm= new FormGroup({
    'DepId':new FormControl('',Validators.required),
    'Dname':new FormControl('',Validators.required),
    'Location':new FormControl('',Validators.required),
  
     });
     SubmitData(){
      console.log(this.departmentForm.value);
      if(this.departmentForm.valid){
        console.log(this.departmentForm.value);
        this.service.createDepartmentData(this.departmentForm.value).subscribe((res)=>{
          console.log(res,'res==>');
          this.departmentForm.reset();
          this.successmsg= res.message;
        });
      }
      else{
        this.errormsg='All fields required';
      }
    }

    UpdateData(){
      console.log(this.departmentForm.value,'updatedform');
      if(this.departmentForm.valid){
        this.service.updateDepartmentData(this.departmentForm.value,this.getparamid).subscribe((res)=>{
         console.log(res,'resupdated');
         this.successmsg=res.message;
        });
      }else{
        this.errormsg='All fields required';
      }
    }
  
  }


