import { Component, OnInit } from '@angular/core';
import { ListCvService } from '../services/list-cv.service';
ListCvService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private listcv:ListCvService) { }
  detailCV:any

  ngOnInit(): void {
    this.detailCV=this.listcv.cvData;
  }

}
