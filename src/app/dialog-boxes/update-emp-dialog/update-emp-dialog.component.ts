import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './../../Emp-Service/employee.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-emp-dialog',
  templateUrl: './update-emp-dialog.component.html',
  styleUrls: ['./update-emp-dialog.component.css'],
})
export class UpdateEmpDialogComponent {
  updateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeService,
    private dialogRef: MatDialogRef<UpdateEmpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
    });

    if (this.editData) {
      this.updateForm.controls['fname'].setValue(this.editData.fname);
      this.updateForm.controls['lname'].setValue(this.editData.lname);
      this.updateForm.controls['email'].setValue(this.editData.email);
    }
  }
}
