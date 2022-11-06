import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-p-create-appointment',
  templateUrl: './p-create-appointment.component.html',
  styleUrls: ['./p-create-appointment.component.css']
})
export class PCreateAppointmentComponent implements OnInit {

  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  
  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('AppointmentId');
    if(this.getparamid){
     this.service.getSingleAppointmentData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.appointmentForm.patchValue({
        AppointmentId:res.data[0].AppointmentId,
        AppointTime:res.data[0].AppointTime,
        PID:res.data[0].PID,
        DocId:res.data[0].DocId,
       });
     });
   }
  }


  appointmentForm = new FormGroup({
    'AppointmentId': new FormControl('', Validators.required),
    'AppointTime': new FormControl('', Validators.required),
    'PID': new FormControl('', Validators.required),
    'DocId': new FormControl('', Validators.required)
  });

  SubmitData() {
    console.log(this.appointmentForm.value);
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      this.service.createAppointmentData(this.appointmentForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.appointmentForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    }
  }

}
