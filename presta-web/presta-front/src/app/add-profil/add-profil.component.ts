import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListProfilService } from '../services/list-profil.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
  public _contactForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddProfilComponent>,
    private listProfilService: ListProfilService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
     }

  ngOnInit(): void {
    this._contactForm = this._formBuilder.group({
      ID: [this.data.ID],
      Name: [ this.data.Name, [Validators.required]],
      Description: [ this.data.Description, [Validators.required]],
    });
  }
  onSubmit() {
    if (isNaN(this.data.ID)) {
      this.listProfilService.addProfil(this._contactForm.value);
      this.dialogRef.close();
    } else {
      this.listProfilService.editProfilt(this._contactForm.value);
      this.dialogRef.close();
    }
  }


}
