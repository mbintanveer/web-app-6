import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctorfilter'
})
export class DoctorfilterPipe implements PipeTransform {

  transform(readData: any, docId: number) {

    if (readData.length === 0 || docId === -1) {
      return readData;
    }
  
    const doctors = [];
    for (const doctor of readData) {
      if (doctor['DocId'] === docId) {
        doctors.push(doctor);

      }
    }
    return doctors;
  }
}
