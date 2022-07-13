import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Profil } from '../model/Profil';
import { ProfilService } from '../services/profil.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProfilComponent } from '../add-profil/add-profil.component';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.css']
})
export class ProfilListComponent implements OnInit {
  profils!: Profil[];
  isPopupOpened = true;

  constructor(private dialog: MatDialog,private profilservice:ProfilService,private router:Router) { }

  ngOnInit(): void {
    this.getProfils();
  }
  private getProfils(){
    this.profilservice.getProfilsList().subscribe(data => {
      this.profils = data;
    });

}

deleteProfil(id: number){
  this.profilservice.deleteProfiler(id).subscribe( data => {
    console.log(data);
    this.getProfils();
  })
}

updateEmployee(id: number){
  this.router.navigate(['update-profil', id]);
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



}
