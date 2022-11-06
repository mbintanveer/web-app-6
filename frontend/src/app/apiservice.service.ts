import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }
  docCount='http://localhost:3000/doctorscount';
  getDoctorsCount():Observable<any> {
    return this._http.get(`${this.docCount}`);
  }

  PatientCount='http://localhost:3000/patientscount';
  getPatientCount():Observable<any> {
    return this._http.get(`${this.PatientCount}`);
  }

  AppointmentCount='http://localhost:3000/appointmentscount';
  getAppointmentsCount():Observable<any> {
    return this._http.get(`${this.AppointmentCount}`);
  }
  depCount='http://localhost:3000/departmentcount';
  getDepartmentCount():Observable<any> {
    return this._http.get(`${this.depCount}`);
  }

  diagnoseCount='http://localhost:3000/diagnosecount';
  getDiagnoseCount():Observable<any> {
    return this._http.get(`${this.diagnoseCount}`);
  }

  diseaseCount='http://localhost:3000/diseasecount';
  getDiseaseCount():Observable<any> {
    return this._http.get(`${this.diseaseCount}`);
  }
  medicineCount='http://localhost:3000/medicinecount';
  getMedicineCount():Observable<any> {
    return this._http.get(`${this.medicineCount}`);
  }

  specializationCount='http://localhost:3000/specializationcount';
  getSpecializationCount():Observable<any> {
    return this._http.get(`${this.specializationCount}`);
  }
  apiUrl = 'http://localhost:3000/appointments';

  //get all data 
  getAllAppointmentData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }
  //create
  createAppointmentData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}`, data);
  }

  deleteAppointmentData(AppointmentId: any): Observable<any> {
    let ids = AppointmentId;
    return this._http.delete(`${this.apiUrl}/${ids}`)
  }
  updateAppointmentData(data: any, AppointmentId: any): Observable<any> {
    let ids = AppointmentId;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }

  getSingleAppointmentData(AppointmentId: any): Observable<any> {
    let ids = AppointmentId;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }


  apiUrl1 = 'http://localhost:3000/department';

  //get all data 
  getAllDepartmentData(): Observable<any> {
    return this._http.get(`${this.apiUrl1}`);
  }
  //create
  createDepartmentData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl1}`, data);
  }

  deleteDepartmentData(DepId: any): Observable<any> {
    let ids = DepId;
    return this._http.delete(`${this.apiUrl1}/${ids}`)
  }
  updateDepartmentData(data: any, DepId: any): Observable<any> {
    let ids = DepId;
    return this._http.put(`${this.apiUrl1}/${ids}`, data);
  }

  getSingleDepartmentData(DepId: any): Observable<any> {
    let ids = DepId;
    return this._http.get(`${this.apiUrl1}/${ids}`);
  }



  apiUrl2 = 'http://localhost:3000/diagnose';

  //get all data 
  getAllDiagnoseData(): Observable<any> {
    return this._http.get(`${this.apiUrl2}`);
  }
  //create
  createDiagnoseData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl2}`, data);
  }

  deleteDiagnoseData(Did: any,AppointmentId: any): Observable<any> {
    let ids = Did;
    let ids1 = AppointmentId;
    return this._http.delete(`${this.apiUrl2}/${ids}/${ids1}`)
  }
  updateDiagnoseData(data: any, Did: any, AppointmentId: any): Observable<any> {
    let ids = Did;
    let ids1 = AppointmentId;
    return this._http.put(`${this.apiUrl2}/${ids}/${ids1}`, data);
  }

  getSingleDiagnoseData( Did: any,AppointmentId: any): Observable<any> {
    let ids = Did;
    let ids1 = AppointmentId;
    return this._http.get(`${this.apiUrl2}/${ids}/${ids1}`);
  }



  apiUrl3 = 'http://localhost:3000/disease';

  //get all data 
  getAllDiseaseData(): Observable<any> {
    return this._http.get(`${this.apiUrl3}`);
  }
  //create
  createDiseaseData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl3}`, data);
  }

  deleteDiseaseData(Did: any): Observable<any> {
    let ids = Did;
    return this._http.delete(`${this.apiUrl3}/${ids}`)
  }
  updateDiseaseData(data: any, Did: any): Observable<any> {
    let ids = Did;
    return this._http.put(`${this.apiUrl3}/${ids}`, data);
  }

  getSingleDiseaseData(Did: any): Observable<any> {
    let ids = Did;
    return this._http.get(`${this.apiUrl3}/${ids}`);
  }

  apiUrl4 = 'http://localhost:3000/doctors';

  //get all data 
  getAllDoctorData(): Observable<any> {
    return this._http.get(`${this.apiUrl4}`);
  }
  //create
  createDoctorData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl4}`, data);
  }

  deleteDoctorData(DocId: any): Observable<any> {
    let ids = DocId;
    return this._http.delete(`${this.apiUrl4}/${ids}`)
  }
  updateDoctorData(data: any, DocId: any): Observable<any> {
    let ids = DocId;
    return this._http.put(`${this.apiUrl4}/${ids}`, data);
  }

  getSingleDoctorData(DocId: any): Observable<any> {
    let ids = DocId;
    return this._http.get(`${this.apiUrl4}/${ids}`);
  }


  apiUrl5 = 'http://localhost:3000/d_specialization';

  //get all data 
  getAllDoc_SpecializationData(): Observable<any> {
    return this._http.get(`${this.apiUrl5}`);
  }
  //create
  createDoc_SpecializationData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl5}`, data);
  }

  deleteDoc_SpecializationData(DocId: any, SpecId: any): Observable<any> {
    let ids = DocId;
    let ids1 = SpecId;
    return this._http.delete(`${this.apiUrl5}/${ids}/${ids1}`)
  }
  updateDoc_SpecializationData(data: any, DocId: any, SpecId: any): Observable<any> {
    let ids = DocId;
    let ids1 = SpecId;
    return this._http.put(`${this.apiUrl5}/${ids}/${ids1}`, data);
  }

  getSingleDoc_SpecializationData(DocId: any, SpecId: any): Observable<any> {
    let ids = DocId;
    let ids1 = SpecId;
    return this._http.get(`${this.apiUrl5}/${ids}/${ids1}`);
  }


  apiUrl6 = 'http://localhost:3000/medicines';

  //get all data 
  getAllMedicineData(): Observable<any> {
    return this._http.get(`${this.apiUrl6}`);
  }
  //create
  createMedicineData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl6}`, data);
  }

  deleteMedicineData(MID: any): Observable<any> {
    let ids = MID;
    return this._http.delete(`${this.apiUrl6}/${ids}`)
  }
  updateMedicineData(data: any, MID: any): Observable<any> {
    let ids = MID;
    return this._http.put(`${this.apiUrl6}/${ids}`, data);
  }

  getSingleMedicineData(MID: any): Observable<any> {
    let ids = MID;
    return this._http.get(`${this.apiUrl6}/${ids}`);
  }

  apiUrl7 = 'http://localhost:3000/patient';

  //get all data 
  getAllPatientData(): Observable<any> {
    return this._http.get(`${this.apiUrl7}`);
  }
  //create
  createPatientData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl7}`, data);
  }

  deletePatientData(PID: any): Observable<any> {
    let ids = PID;
    return this._http.delete(`${this.apiUrl7}/${ids}`)
  }
  updatePatientData(data: any, PID: any): Observable<any> {
    let ids = PID;
    return this._http.put(`${this.apiUrl7}/${ids}`, data);
  }

  getSinglePatientData(PID: any): Observable<any> {
    let ids = PID;
    return this._http.get(`${this.apiUrl7}/${ids}`);
  }


  apiUrl8 = 'http://localhost:3000/prescription';

  //get all data 
  getAllPrescriptionData(): Observable<any> {
    return this._http.get(`${this.apiUrl8}`);
  }
  //create
  createPrescriptionData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl8}`, data);
  }

  deletePrescriptionData(PresId: any): Observable<any> {
    let ids = PresId;
    return this._http.delete(`${this.apiUrl8}/${ids}`)
  }
  updatePrescriptionData(data: any, PresId: any): Observable<any> {
    let ids = PresId;
    return this._http.put(`${this.apiUrl8}/${ids}`, data);
  }

  getSinglePrescriptionData(PresId: any): Observable<any> {
    let ids = PresId;
    return this._http.get(`${this.apiUrl8}/${ids}`);
  }

  apiUrl9 = 'http://localhost:3000/specialization';

  //get all data 
  getAllSpecializationData(): Observable<any> {
    return this._http.get(`${this.apiUrl9}`);
  }
  //create
  createSpecializationData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl9}`, data);
  }

  deleteSpecializationData(SpecId: any): Observable<any> {
    let ids = SpecId;
    return this._http.delete(`${this.apiUrl9}/${ids}`)
  }
  updateSpecializationData(data: any, SpecId: any): Observable<any> {
    let ids = SpecId;
    return this._http.put(`${this.apiUrl9}/${ids}`, data);
  }

  getSingleSpecializationData(SpecId: any): Observable<any> {
    let ids = SpecId;
    return this._http.get(`${this.apiUrl9}/${ids}`);
  }

  apiUrl10 = 'http://localhost:3000/doctor_account';

  //get all data 
  getAllDoctor_AccountData(): Observable<any> {
    return this._http.get(`${this.apiUrl10}`);
  }
  //create
  createDoctor_AccountData(DocId: any,Password:any): Observable<any> {
    let ids = DocId;
    let ids1 = Password;
    console.log('createapi=>');
    return this._http.post(`${this.apiUrl10}`, ids,ids1);
  }

  deleteDoctor_AccountData(DocId: any, Password:any): Observable<any> {
    let ids = DocId;
    let ids1 = Password;
    return this._http.delete(`${this.apiUrl10}/${ids}/${ids1}`)
  }
  updateDoctor_AccountData(data: any, DocId: any): Observable<any> {
    let ids = DocId;
    return this._http.put(`${this.apiUrl10}/${ids}`, data);
  }

  getSingleDoctor_AccountData(DocId: any): Observable<any> {
    let ids = DocId;
    return this._http.get(`${this.apiUrl10}/${ids}`);
  }

  apiUrl11 = 'http://localhost:3000/patient_account';

  //get all data 
  getAllPatient_AccountData(): Observable<any> {
    return this._http.get(`${this.apiUrl11}`);
  }
  //create
  createPatient_AccountData(PID: any, Password:any): Observable<any> {
    let ids = PID;
    let ids1 = Password;
    return this._http.post(`${this.apiUrl11}`, ids,ids1);
  }

  deletePatient_AccountData(PID: any, Password:any): Observable<any> {
    let ids = PID;
    let ids1 = Password;
    return this._http.delete(`${this.apiUrl11}/${ids}/${ids1}`)
  }
  updatePatient_AccountData(data: any, PID: any): Observable<any> {
    let ids = PID;
    return this._http.put(`${this.apiUrl11}/${ids}`, data);
  }

  getSinglePatient_AccountData(PID: any): Observable<any> {
    let ids = PID;
    return this._http.get(`${this.apiUrl11}/${ids}`);
  }



  apiUrl12 = 'http://localhost:3000/admin_account';

  //get all data 
  getAllAdmin_AccountData(): Observable<any> {
    return this._http.get(`${this.apiUrl12}`);
  }
  //create
  createAdmin_AccountData(adminId: any, Password:any): Observable<any> {
    let ids = adminId;
    let ids1 = Password;
    return this._http.post(`${this.apiUrl12}`, ids,ids1);
  }

  deleteAdmin_AccountData(adminId: any, Password:any): Observable<any> {
    let ids = adminId;
    let ids1 = Password;
    return this._http.delete(`${this.apiUrl12}/${ids}/${ids1}`)
  }
  updateAdmin_AccountData(data: any, adminId: any): Observable<any> {
    let ids = adminId;
    return this._http.put(`${this.apiUrl12}/${ids}`, data);
  }

  getSingleAdmin_AccountData(adminId: any): Observable<any> {
    let ids = adminId;
    return this._http.get(`${this.apiUrl12}/${ids}`);
  }


}

