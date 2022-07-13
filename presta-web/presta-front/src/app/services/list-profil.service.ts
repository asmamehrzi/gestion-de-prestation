import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from '../model/Profil';

@Injectable({
  providedIn: 'root'
})
export class ListProfilService {
  _contactProfil: Profil[] = [];

  constructor(private http:HttpClient) { }

  addProfil(profil: Profil) {

    profil.ID = this._contactProfil.length + 1;
    this._contactProfil.push(profil);
  }

  editProfilt(profil: Profil) {
    const index = this._contactProfil.findIndex(c => c.ID === profil.ID);
    this._contactProfil[index] = profil;
  }

  deleteProfil(id: number) {
    const contact = this._contactProfil.findIndex(c => c.ID === id);
    this._contactProfil.splice(contact, 1);
  }

  getAllProfil() {

    return this._contactProfil;
  }
}
