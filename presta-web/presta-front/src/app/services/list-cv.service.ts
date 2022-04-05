import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCvService {

  constructor() { }
  cvData = [
    {
      id:1,
      cvname:"asma",
      cvImg:"https://s3.envato.com/files/197357482/Images/2.%20Cover-letter.png"
    
    },
    {
      id:2,
      cvname:"asma",
      cvImg:"https://s3.envato.com/files/197357482/Images/1.%20Cover-Letter.png"
    
    },
    {
      id:3,
      cvname:"asma",
      cvImg:"https://www.slideteam.net/media/catalog/product/cache/1280x720/j/o/job_cv_sample_format_with_achievements_and_abilities_slide01.jpg"
    
    }
  ]
}
