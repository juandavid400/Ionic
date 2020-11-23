import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../services/notices.service';
import { NoticesI } from '../Models/NoticesI';
import { element } from 'protractor';
import { title } from 'process';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  textoBuscar: '';

  sectionsConfig = {
    imgSize: 3,
    contentSize: 9
  }
  
  sections: Array<NoticesI> = this.noticesService.getAll();

  constructor(private noticesService:NoticesService) { }

  ngOnInit() {
  }

  Read() {
    console.log("entre en read");
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");
  
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
    let titleList = this.noticesService.getAll();
    let copytitle = titleList;
    let key: number = 0;
    console.log("Esto es title list");
    console.log(titleList);

    const val = event.target.value;
    console.log("Esto es val");
    console.log(val);

    if (val && val.trim() != ''){
      titleList = titleList.filter((element) =>{
        
        const texto = element.header.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
        console.log("val.toLowerCase()");
        console.log(val.toLowerCase());
        console.log(texto);
        for (let i = 0; i <titleList.length ; i++){
          
          if (texto == false){
            var card = document.getElementById("carta");
            card.style.display = "none"; 
            // var card = document.getElementById("carta");
            // card.style.display = "in-block";         
          } else {
            // copytitle =      
            // var card = document.getElementById("carta");
            // card.style.display = "in-block";
            // var card = document.getElementById("carta");
            // card.style.display = "none";
          }
          return (texto);
        }
      })
    }
  }
}
