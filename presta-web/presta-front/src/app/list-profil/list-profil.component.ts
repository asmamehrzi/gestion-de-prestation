import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProfilComponent } from '../add-profil/add-profil.component';
import { ListProfilService } from '../services/list-profil.service';


export interface ListProfil {
  id: number;
  name: string;
  description: string;


}

const ELEMENT_DATA: ListProfil[] = [
  {id: 1, name: 'JAVA', description: 'JAVA'},
  {id: 2, name: 'PHP', description:'PHP'},
  {id: 3, name: 'ANGULAR', description: 'ANGULAR'},
  {id: 4, name: 'JAVA SCRIPT', description:'JAVA SCRIPT'},
  {id: 5, name: 'CSS', description:'CSS'},
  {id: 6, name: 'PYTHON', description: 'PYTHON'},
  {id: 7, name: 'SYMPHONY', description: 'SYMPHONY'},
  {id: 8, name: 'HTML', description: 'HTML'},
  {id: 9, name: 'REACT JS', description: 'REACT JS'},
  {id: 10, name: 'SQL', description: 'SQL'},
];

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent   {
  isPopupOpened = true;
 displayedColumns: string[] = ['id', 'name', 'description'];
 dataSource = ELEMENT_DATA;
 constructor(private dialog: MatDialog,
  private _profilService?: ListProfilService) { }

  get ContactList() {
    return this._profilService?.getAllProfil();
  }

  addContact() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddProfilComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  editContact(id: number) {
    this.isPopupOpened = true;
    const contact = this._profilService?.getAllProfil().find(c => c.ID === id);
    const dialogRef = this.dialog.open(AddProfilComponent, {
      data: contact
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteContact(id: number) {
    this._profilService?.deleteProfil(id);
  }
}
