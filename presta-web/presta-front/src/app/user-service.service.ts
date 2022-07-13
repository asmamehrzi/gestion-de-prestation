import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUserById(id:number):Observable<any>{
    return this.http.get(`${environment.endpoint}/${id}`);
  }
  createUser(user: Object): Observable<any> {
    return this.http.post(`${environment.endpoint}/register`, user);
  }
  getUsersList(): Observable<any> {
    return this.http.get(`${environment.endpoint}`);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${environment.endpoint}/delete/${id}`, { responseType: 'text' });
  }
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${environment.endpoint}/${id}`, value);
  }
}
