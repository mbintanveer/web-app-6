import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  DocCount: any;
  PatientCount: any;
  AppointmentCount: any;
  DepCount: any;
  DiagnoseCount: any;
  DiseaseCount: any;
  MedicineCount: any;
  SpecializationCount: any;
  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.getDoctorCount();
    this.getAppointmentCount();
    this.getPatientCount();
    this.getDepartmentCount();
    this.getDiagnoseCount();
    this.getDiseaseCount();
    this.getMedicineCount();
    this.getSpecializationCount();
    
  }
  getDoctorCount() {
    this.service.getDoctorsCount().subscribe((res)=>{
      console.log(res, "res...")
      this.DocCount = res.data;
    });
  }

  getPatientCount() {
    this.service.getPatientCount().subscribe((res)=>{
      console.log(res, "res...")
      this.PatientCount = res.data;
    });
  }


  getAppointmentCount() {
    this.service.getAppointmentsCount().subscribe((res)=>{
      console.log(res, "res...")
      this.AppointmentCount = res.data;
    });
  }

  getDepartmentCount() {
    this.service.getDepartmentCount().subscribe((res)=>{
      console.log(res, "res...")
      this.DepCount = res.data;
    });
  }

  getDiagnoseCount() {
    this.service.getDiagnoseCount().subscribe((res)=>{
      console.log(res, "res...")
      this.DiagnoseCount = res.data;
    });
  }


  getDiseaseCount() {
    this.service.getDiseaseCount().subscribe((res)=>{
      console.log(res, "res...")
      this.DiseaseCount = res.data;
    });
  }

  getMedicineCount() {
    this.service.getMedicineCount().subscribe((res)=>{
      console.log(res, "res...")
      this.MedicineCount = res.data;
    });
  }


  getSpecializationCount() {
    this.service.getSpecializationCount().subscribe((res)=>{
      console.log(res, "res...")
      this.SpecializationCount = res.data;
    });
  }
  
}
