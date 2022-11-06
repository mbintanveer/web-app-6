import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-create-disease',
  templateUrl: './create-disease.component.html',
  styleUrls: ['./create-disease.component.css']
})
export class CreateDiseaseComponent implements OnInit {
 
  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('Did');
    if(this.getparamid){
     this.service.getSingleDiseaseData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.diseaseForm.patchValue({
        Did:res.data[0].Did,
        Dname:res.data[0].Dname,
       });
     });
   }
  }

  
  diseaseForm = new FormGroup({
    'Did': new FormControl('', Validators.required),
    'Dname': new FormControl('', Validators.required)
  });

  SubmitData() {
    console.log(this.diseaseForm.value);
    if (this.diseaseForm.valid) {
      console.log(this.diseaseForm.value);
      this.service.createDiseaseData(this.diseaseForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.diseaseForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    }
  }

  UpdateData(){
    console.log(this.diseaseForm.value,'updatedform');
    if(this.diseaseForm.valid){
      this.service.updateDiseaseData(this.diseaseForm.value,this.getparamid).subscribe((res)=>{
       console.log(res,'resupdated');
       this.successmsg=res.message;
      });
    }else{
      this.errormsg='All fields required';
    }
  }

}
