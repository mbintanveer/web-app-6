import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { ApiserviceService } from './apiservice.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HeadersComponent } from './headers/headers.component';
import { PatientHeaderComponent } from './headers/patient-header/patient-header.component';
import { DoctorHeaderComponent } from './headers/doctor-header/doctor-header.component';
import { AdminHeaderComponent } from './headers/admin-header/admin-header.component';
import { ComponentsComponent } from './components/components.component';
import { ReadDoctorComponent } from './components/read-doctor/read-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { ReadPatientComponent } from './components/read-patient/read-patient.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { EditAppointmentsComponent } from './components/edit-appointments/edit-appointments.component';
import { ReadDepartmentComponent } from './components/read-department/read-department.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { ReadDiagnoseComponent } from './components/read-diagnose/read-diagnose.component';
import { EditDiagnoseComponent } from './components/edit-diagnose/edit-diagnose.component';
import { ReadDiseaseComponent } from './components/read-disease/read-disease.component';
import { EditDiseaseComponent } from './components/edit-disease/edit-disease.component';
import { ReadSpecializationsComponent } from './components/read-specializations/read-specializations.component';
import { EditSpecializationsComponent } from './components/edit-specializations/edit-specializations.component';
import { ReadMedicinesComponent } from './components/read-medicines/read-medicines.component';
import { EditMedicinesComponent } from './components/edit-medicines/edit-medicines.component';
import { ReadPrescriptionComponent } from './components/read-prescription/read-prescription.component';
import { EditPrescriptionComponent } from './components/edit-prescription/edit-prescription.component';
import { ReadDocSpecializationComponent } from './components/read-doc-specialization/read-doc-specialization.component';
import { EditDocSpecializationComponent } from './components/edit-doc-specialization/edit-doc-specialization.component';
import { ReadAppointmentsComponent } from './components/read-appointments/read-appointments.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { CreateDiagnoseComponent } from './components/create-diagnose/create-diagnose.component';
import { CreateDiseaseComponent } from './components/create-disease/create-disease.component';
import { CreateSpecializationComponent } from './components/create-specialization/create-specialization.component';
import { CreateDocSpecializationComponent } from './components/create-doc-specialization/create-doc-specialization.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';
import { CreatePrescriptionComponent } from './components/create-prescription/create-prescription.component';
import { HomeComponent } from './components/home/home.component';
import { PReadDoctorComponent } from './components/p-read-doctor/p-read-doctor.component';
import { PReadMedicineComponent } from './components/p-read-medicine/p-read-medicine.component';
import { PReadDepartmentComponent } from './components/p-read-department/p-read-department.component';
import { PReadDiseaseComponent } from './components/p-read-disease/p-read-disease.component';
import { PCreateAppointmentComponent } from './components/p-create-appointment/p-create-appointment.component';
import { LoginComponent } from './logins/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PatientSidebarComponent } from './sidebars/patient-sidebar/patient-sidebar.component';
import { AdminSidebarComponent } from './sidebars/admin-sidebar/admin-sidebar.component';
import { DoctorSidebarComponent } from './sidebars/doctor-sidebar/doctor-sidebar.component';
import { DReadPatientComponent } from './components/d-read-patient/d-read-patient.component';
import { DReadAppointmentComponent } from './components/d-read-appointment/d-read-appointment.component';
import { DReadMedicineComponent } from './components/d-read-medicine/d-read-medicine.component';
import { DCreatePrescriptionComponent } from './components/d-create-prescription/d-create-prescription.component';
import { DReadDiagnoseComponent } from './components/d-read-diagnose/d-read-diagnose.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { DoctorLoginComponent } from './logins/doctor-login/doctor-login.component';
import { AdminLoginComponent } from './logins/admin-login/admin-login.component';
import { PReadDiagnosisComponent } from './components/p-read-diagnosis/p-read-diagnosis.component';
import { PReadAppointmentsComponent } from './components/p-read-appointments/p-read-appointments.component';
import { DReadDiseasesComponent } from './components/d-read-diseases/d-read-diseases.component';
import { DReadDepartmentComponent } from './components/d-read-department/d-read-department.component';
import { DReadSpecializationsComponent } from './components/d-read-specializations/d-read-specializations.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    PatientHeaderComponent,
    DoctorHeaderComponent,
    AdminHeaderComponent,
    ComponentsComponent,
    ReadDoctorComponent,
    EditDoctorComponent,
    ReadPatientComponent,
    EditPatientComponent,
    ReadAppointmentsComponent,
    EditAppointmentsComponent,
    ReadDepartmentComponent,
    EditDepartmentComponent,
    ReadDiagnoseComponent,
    EditDiagnoseComponent,
    ReadDiseaseComponent,
    EditDiseaseComponent,
    ReadSpecializationsComponent,
    EditSpecializationsComponent,
    ReadMedicinesComponent,
    EditMedicinesComponent,
    ReadPrescriptionComponent,
    EditPrescriptionComponent,
    ReadDocSpecializationComponent,
    EditDocSpecializationComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    CreateAppointmentComponent,
    CreateDiagnoseComponent,
    CreateDiseaseComponent,
    CreateSpecializationComponent,
    CreateDocSpecializationComponent,
    CreateDepartmentComponent,
    CreateMedicineComponent,
    CreatePrescriptionComponent,
    HomeComponent,
    PCreateAppointmentComponent,
    PReadDepartmentComponent,
    PReadDiseaseComponent,
    PReadDoctorComponent,
    PReadMedicineComponent,
    LoginComponent,
    SidebarComponent,
    PatientSidebarComponent,
    AdminSidebarComponent,
    DoctorSidebarComponent,
    DReadPatientComponent,
    DReadAppointmentComponent,
    DReadMedicineComponent,
    DCreatePrescriptionComponent,
    DReadDiagnoseComponent,
    DoctorLoginComponent,
    AdminLoginComponent,
    StartingPageComponent,
    PReadDiagnosisComponent,
    PReadAppointmentsComponent,
    DReadDiseasesComponent,
    DReadDepartmentComponent,
    DReadSpecializationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService,ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
