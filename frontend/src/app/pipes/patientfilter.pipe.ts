import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientfilter'
})
export class PatientfilterPipe implements PipeTransform {

  transform(readData: any, patientId: number) {

    if (readData.length === 0 || patientId === -1) {
      return readData;
    }
  
    const patients = [];
    for (const patient of readData) {
      if (patient['PID'] === patientId) {
        patients.push(patient);

      }
    }
    return patients;
  }

}
