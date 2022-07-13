import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Profil } from '../model/Profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  getProfilById(id:number):Observable<any>{
    return this.http.get(`${environment.profilUrl}/${id}`);
  }
  createProfil(profil: Profil): Observable<any> {
    return this.http.post(`${environment.profilUrl}`, profil);
  }
  getProfilsList(): Observable<any> {
    return this.http.get(`${environment.profilUrl}`);
  }
  deleteProfiler(id: number): Observable<any> {
    return this.http.delete(`${environment.profilUrl}/${id}`, { responseType: 'text' });
  }
  updateProfil(id: number, value: any): Observable<Object> {
    return this.http.put(`${environment.profilUrl}/${id}`, value);
  }


}
