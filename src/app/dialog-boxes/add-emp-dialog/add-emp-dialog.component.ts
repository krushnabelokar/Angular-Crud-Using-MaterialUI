import { EmployeeService } from './../../Emp-Service/employee.service';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-add-emp-dialog',
  templateUrl: './add-emp-dialog.component.html',
  styleUrls: ['./add-emp-dialog.component.css'],
})
export class AddEmpDialogComponent {
  employeeForm!: FormGroup;
  formName: string = 'Add';

  constructor(
    private appComponent: AppComponent,
    private formBuilder: FormBuilder,
    private service: EmployeeService,
    private dialogRef: MatDialogRef<AddEmpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
    });

    if (this.editData) {
      this.formName = 'Update';
      this.employeeForm.controls['fname'].setValue(this.editData.fname);
      this.employeeForm.controls['lname'].setValue(this.editData.lname);
      this.employeeForm.controls['email'].setValue(this.editData.email);
    }
  }

  addEmployee() {
    if (this.formName === 'Add') {
      this.service.postEmployee(this.employeeForm.value).subscribe((res) => {
        if (res) {
          this.appComponent.getAllEmployee();
          alert('Data Stored Succesfully..!');
          this.dialogRef.close();
        } else {
          alert('Error Occured..!');
        }
      });
    } else {
      this.updateEmployee();
    }
  }

  updateEmployee() {
    this.service
      .updateEmployee(this.employeeForm.value, this.editData.id)
      .subscribe((res: any) => {
        if (res) {
          alert('Employee Updated Successfully...!');
          this.dialogRef.close();
        } else {
          alert('Employee has not updated...!');
        }
      });
  }
}
