import { employee } from './DataType';
import { UpdateEmpDialogComponent } from './dialog-boxes/update-emp-dialog/update-emp-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from './Emp-Service/employee.service';
import { Component } from '@angular/core';
import { AddEmpDialogComponent } from './dialog-boxes/add-emp-dialog/add-emp-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeeData!: any;
  showDialog = true;
  constructor(private service: EmployeeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.service.getAllEmployee().subscribe((res) => {
      if (res) {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }

  addEmployee() {
    this.dialog
      .open(AddEmpDialogComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe(() => {
        this.getAllEmployee();
      });
  }

  editDialog(element: employee) {
    this.dialog
      .open(AddEmpDialogComponent, {
        width: '30%',
        data: element,
      })
      .afterClosed()
      .subscribe(() => {
        this.getAllEmployee();
      });
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe((res) => {
      if (res) {
        alert('Employee has been deleted...!');
        this.getAllEmployee();
      } else {
        alert('Something went wrong...!');
      }
    });
  }

  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'action'];
  dataSource!: MatTableDataSource<any>;
}
