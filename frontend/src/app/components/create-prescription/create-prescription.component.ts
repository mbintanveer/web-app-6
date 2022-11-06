import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {

  
  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('PresId');
    if(this.getparamid){
     this.service.getSinglePrescriptionData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.prescriptionForm.patchValue({
        PresId:res.data[0].PresId,
        Did:res.data[0].Did,
        AppointmentId:res.data[0].AppointmentId,
        MID:res.data[0].MID,
       });
     });
   }
  }

  
  prescriptionForm = new FormGroup({
    'PresId': new FormControl('', Validators.required),
    'Did': new FormControl('', Validators.required),
    'AppointmentId': new FormControl('', Validators.required),
    'MID': new FormControl('', Validators.required)
  });

  SubmitData() {
    console.log(this.prescriptionForm.value);
    if (this.prescriptionForm.valid) {
      console.log(this.prescriptionForm.value);
      this.service.createPrescriptionData(this.prescriptionForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.prescriptionForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    }
  }

  UpdateData(){
    console.log(this.prescriptionForm.value,'updatedform');
    if(this.prescriptionForm.valid){
      this.service.updatePrescriptionData(this.prescriptionForm.value,this.getparamid).subscribe((res)=>{
       console.log(res,'resupdated');
       this.successmsg=res.message;
      });
    }else{
      this.errormsg='All fields required';
    }
  }


}
