import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './headers/admin-header/admin-header.component';

import { PatientHeaderComponent } from './headers/patient-header/patient-header.component';
import { DoctorHeaderComponent } from './headers/doctor-header/doctor-header.component';
import { ReadDoctorComponent } from './components/read-doctor/read-doctor.component';
import { ReadAppointmentsComponent } from './components/read-appointments/read-appointments.component';
import { ReadDepartmentComponent } from './components/read-department/read-department.component';
import { ReadDiagnoseComponent } from './components/read-diagnose/read-diagnose.component';
import { ReadDiseaseComponent } from './components/read-disease/read-disease.component';
import { ReadDocSpecializationComponent } from './components/read-doc-specialization/read-doc-specialization.component';
import { ReadMedicinesComponent } from './components/read-medicines/read-medicines.component';
import { ReadPrescriptionComponent } from './components/read-prescription/read-prescription.component';
import { ReadSpecializationsComponent } from './components/read-specializations/read-specializations.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { CreateDiagnoseComponent } from './components/create-diagnose/create-diagnose.component';
import { CreateDiseaseComponent } from './components/create-disease/create-disease.component';
import { CreateDocSpecializationComponent } from './components/create-doc-specialization/create-doc-specialization.component';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { CreatePrescriptionComponent } from './components/create-prescription/create-prescription.component';
import { CreateSpecializationComponent } from './components/create-specialization/create-specialization.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { EditAppointmentsComponent } from './components/edit-appointments/edit-appointments.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { EditDiagnoseComponent } from './components/edit-diagnose/edit-diagnose.component';
import { EditDiseaseComponent } from './components/edit-disease/edit-disease.component';
import { EditDocSpecializationComponent } from './components/edit-doc-specialization/edit-doc-specialization.component';
import { EditMedicinesComponent } from './components/edit-medicines/edit-medicines.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { EditPrescriptionComponent } from './components/edit-prescription/edit-prescription.component';
import { EditSpecializationsComponent } from './components/edit-specializations/edit-specializations.component';
import { HomeComponent } from './components/home/home.component';
import { PCreateAppointmentComponent } from './components/p-create-appointment/p-create-appointment.component';
import { PReadDepartmentComponent } from './components/p-read-department/p-read-department.component';
import { PReadMedicineComponent } from './components/p-read-medicine/p-read-medicine.component';
import { PReadDiseaseComponent } from './components/p-read-disease/p-read-disease.component';
import { PReadDoctorComponent } from './components/p-read-doctor/p-read-doctor.component';
import { LoginComponent } from './logins/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminSidebarComponent } from './sidebars/admin-sidebar/admin-sidebar.component';
import { PatientSidebarComponent } from './sidebars/patient-sidebar/patient-sidebar.component';
import { DoctorSidebarComponent } from './sidebars/doctor-sidebar/doctor-sidebar.component';
import { SignupComponent } from './components/signup/signup.component';
import { DCreatePrescriptionComponent } from './components/d-create-prescription/d-create-prescription.component';
import { DReadAppointmentComponent } from './components/d-read-appointment/d-read-appointment.component';
import { DReadDiagnoseComponent } from './components/d-read-diagnose/d-read-diagnose.component';
import { DReadPatientComponent } from './components/d-read-patient/d-read-patient.component';
import { DReadMedicineComponent } from './components/d-read-medicine/d-read-medicine.component';
import { DoctorLoginComponent } from './logins/doctor-login/doctor-login.component';
import { AdminLoginComponent } from './logins/admin-login/admin-login.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { PReadAppointmentsComponent } from './components/p-read-appointments/p-read-appointments.component';
import { PReadDiagnosisComponent } from './components/p-read-diagnosis/p-read-diagnosis.component';
import { DReadSpecializationsComponent } from './components/d-read-specializations/d-read-specializations.component';
import { DReadDiseasesComponent } from './components/d-read-diseases/d-read-diseases.component';
import { ReadPatientComponent } from './components/read-patient/read-patient.component';

const routes: Routes = [
  {path:'',component:StartingPageComponent},
  {path:'logins/login',component:LoginComponent},
  {path:'logins/doctor-login',component:DoctorLoginComponent},
  {path:'logins/admin-login',component:AdminLoginComponent},
  {path:'components/signup',component:SignupComponent},
  {path:'headers/doctor-header',component:DoctorHeaderComponent},
  {path:'headers/admin-header',component:AdminHeaderComponent},
  {path:'headers/patient-header',component:PatientHeaderComponent},
  {path:'components/sidebar',component:SidebarComponent},
  {path:'sidebars/admin-sidebar',component:AdminSidebarComponent},
  {path:'sidebars/patient-sidebar',component:PatientSidebarComponent},
  {path:'sidebars/doctor-sidebar',component:DoctorSidebarComponent},
  {path: 'components/read-doctor', component: ReadDoctorComponent },
  { path: 'components/read-appointments', component: ReadAppointmentsComponent },
  { path: 'components/d-read-appointment', component: DReadAppointmentComponent },
  { path: 'components/read-department', component: ReadDepartmentComponent },
  { path: 'components/read-diagnose', component: ReadDiagnoseComponent },
  { path: 'components/d-read-diagnose', component: DReadDiagnoseComponent },
  { path: 'components/d-read-diseases', component: DReadDiseasesComponent },
  { path: 'components/read-disease', component: ReadDiseaseComponent },
  { path: 'components/read-doc-specialization', component: ReadDocSpecializationComponent },
  { path: 'components/read-medicines', component: ReadMedicinesComponent },
  { path: 'components/d-read-medicine', component: DReadMedicineComponent },
  { path: 'components/d-read-patient', component: DReadPatientComponent },
  { path: 'components/read-patient', component: ReadPatientComponent },
  { path: 'components/read-prescription', component: ReadPrescriptionComponent },
  { path: 'components/read-specializations', component: ReadSpecializationsComponent },
  { path: 'components/d-read-specializations', component: DReadSpecializationsComponent },
  { path: 'components/home', component: HomeComponent },

  { path: 'components/create-doctor', component: CreateDoctorComponent },
  { path: 'components/create-doctor/:DocId', component: CreateDoctorComponent },
  { path: 'components/create-appointments', component: CreateAppointmentComponent },
  { path: 'components/create-appointments/:AppointmentId', component: CreateAppointmentComponent },
  { path: 'components/create-department', component: CreateDepartmentComponent },
  { path: 'components/create-department/:DepId', component: CreateDepartmentComponent },
  { path: 'components/create-diagnose', component: CreateDiagnoseComponent },
  { path: 'components/create-diagnose/:Did/:AppointmentId', component: CreateDiagnoseComponent },
  { path: 'components/create-disease', component: CreateDiseaseComponent },
  { path: 'components/create-disease/:Did', component: CreateDiseaseComponent },
  { path: 'components/create-doc-specialization', component: CreateDocSpecializationComponent },
  { path: 'components/create-doc-specialization/:DocId/:SpecId', component: CreateDocSpecializationComponent },
  { path: 'components/create-medicines', component: CreateMedicineComponent },
  { path: 'components/create-medicines/:MID', component: CreateMedicineComponent },
  { path: 'components/create-patient', component: CreatePatientComponent },
  { path: 'components/create-patient/:PID', component: CreatePatientComponent },
  { path: 'components/create-prescription', component: CreatePrescriptionComponent },
  { path: 'components/d-create-prescription', component: DCreatePrescriptionComponent },
  { path: 'components/create-prescription/:PresId', component: CreatePrescriptionComponent },
  { path: 'components/create-specializations', component: CreateSpecializationComponent },
  { path: 'components/create-specializations/:SpecId', component: CreateSpecializationComponent },

  { path: 'components/edit-doctor', component: EditDoctorComponent },
  { path: 'components/edit-appointments', component: EditAppointmentsComponent },
  { path: 'components/edit-department', component: EditDepartmentComponent },
  { path: 'components/edit-diagnose', component: EditDiagnoseComponent },
  { path: 'components/edit-disease', component: EditDiseaseComponent },
  { path: 'components/edit-doc-specialization', component: EditDocSpecializationComponent },
  { path: 'components/edit-medicines', component: EditMedicinesComponent },
  { path: 'components/edit-patient', component: EditPatientComponent },
  { path: 'components/edit-prescription', component: EditPrescriptionComponent },
  { path: 'components/edit-specializations', component: EditSpecializationsComponent },
  { path: 'components/p-create-appointment', component: PCreateAppointmentComponent },
  { path: 'components/p-read-department', component: PReadDepartmentComponent },
  { path: 'components/p-read-medicine', component: PReadMedicineComponent },
  { path: 'components/p-read-disease', component: PReadDiseaseComponent },
  { path: 'components/p-read-doctor', component: PReadDoctorComponent },
  { path: 'components/p-read-appointments', component: PReadAppointmentsComponent },
  { path: 'components/p-read-diagnose', component: PReadDiagnosisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

