import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {
 
  errormsg:any;
  successmsg:any;
  getparamid:any;

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('MID');
    if(this.getparamid){
     this.service.getSingleMedicineData(this.getparamid).subscribe((res)=>{
       console.log(res,'res==>');
       this.medicineForm.patchValue({
        MID:res.data[0].MID,
        MedName:res.data[0].MedName,
       });
     });
   }
  }

  
  medicineForm = new FormGroup({
    'MID': new FormControl('', Validators.required),
    'MedName': new FormControl('', Validators.required)
  });

  SubmitData() {
    console.log(this.medicineForm.value);
    if (this.medicineForm.valid) {
      console.log(this.medicineForm.value);
      this.service.createMedicineData(this.medicineForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.medicineForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'All fields required';
    }
  }

  
  UpdateData(){
    console.log(this.medicineForm.value,'updatedform');
    if(this.medicineForm.valid){
      this.service.updateMedicineData(this.medicineForm.value,this.getparamid).subscribe((res)=>{
       console.log(res,'resupdated');
       this.successmsg=res.message;
      });
    }else{
      this.errormsg='All fields required';
    }
  }

}
