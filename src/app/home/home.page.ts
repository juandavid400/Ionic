import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../services/notices.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  textoBuscar: '';
  notices: any[] = [];
  sports: any[] = [];
  ciences: any[] = [];

  sectionsConfig = {
    imgSize: 3,
    contentSize: 9
  }

  constructor(private noticesService:NoticesService) {
    this.noticesService.tecnologia()
    .subscribe( resp => {
      this.notices = resp;
     console.log(resp);
    });

    this.noticesService.deportes()
    .subscribe( resp => {
      this.sports = resp;
     console.log(resp);
    });

    this.noticesService.ciences()
    .subscribe( resp => {
      this.ciences = resp;
     console.log(resp);
    });
   }


  ngOnInit() {}

  Read() {
    console.log("entre en read");
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");

    let tecnologia = this.noticesService.tecnologia();

    
      tecnologia.forEach(item => {
        
      });
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  buscar(event: any){
    this.textoBuscar = event.detail.value;
  }
}
