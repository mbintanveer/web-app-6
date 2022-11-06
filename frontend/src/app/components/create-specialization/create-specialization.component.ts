import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-create-specialization',
  templateUrl: './create-specialization.component.html',
  styleUrls: ['./create-specialization.component.css']
})
export class CreateSpecializationComponent implements OnInit {

  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('SpecId');
    if(this.getparamid){
     this.service.getSingleSpecializationData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.specializationForm.patchValue({
        SpecId:res.data[0].SpecId,
        SpecDesc:res.data[0].SpecDesc,
       });
     });
   }
  }

  
  specializationForm = new FormGroup({
    'SpecId': new FormControl('', Validators.required),
    'SpecDesc': new FormControl('', Validators.required)
  
  });

  SubmitData() {
    console.log(this.specializationForm.value);
    if (this.specializationForm.valid) {
      console.log(this.specializationForm.value);
      this.service.createSpecializationData(this.specializationForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.specializationForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    }
  }

  UpdateData(){
    console.log(this.specializationForm.value,'updatedform');
    if(this.specializationForm.valid){
      this.service.updateSpecializationData(this.specializationForm.value,this.getparamid).subscribe((res)=>{
       console.log(res,'resupdated');
       this.successmsg=res.message;
      });
    }else{
      this.errormsg='All fields required';
    }
  }
}
