import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  readDepartmentData: any;
  alert:boolean = false;

  constructor(private service:ApiserviceService) { }

/*   editDepartment(id: number, department: any) {
    const item = (<string>newItem).trim();
    if (!item) return;

    const newDepartment = {
      id,
      item,
    };

    this.recipies$ = this.service.updateDepartmentData(newRecipe, id).pipe(tap(() => (this.recipies$ = this.fetchAll())));
    
  } */

  deleteDepartment(id: number) {
    this.service.deleteDepartmentData(id).subscribe((res) => {
      console.log(res,'deleteres==>');
      this.alert =true;
      this.getAllDepartmentData();
    })
  }

  closeAlert() {
    this.alert =false;
  }

  ngOnInit(): void {
    this.getAllDepartmentData();
  }

  getAllDepartmentData(){
    this.service.getAllDepartmentData().subscribe((res)=>{
      console.log(res, "res...")
      this.readDepartmentData = res.data;
    });
  }
  
}
