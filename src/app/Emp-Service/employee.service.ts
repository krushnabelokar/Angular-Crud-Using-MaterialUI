import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployee() {
    return this.http.get<any>('http://localhost:3000/Employee').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postEmployee(data: any) {
    return this.http.post('http://localhost:3000/Employee', data);
  }

  updateEmployee(data: any, id: number) {
    return this.http.put<any>(`http://localhost:3000/Employee/` + id, data);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`http://localhost:3000/Employee/${id}`);
  }
}
