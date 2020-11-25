import { Component, Input, OnInit } from '@angular/core';
import { NoticesService } from '../services/notices.service';
import { NoticesI } from '../Models/NoticesI';
import { element } from 'protractor';
import { title } from 'process';
import { info } from 'console';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() indice:any;
  textoBuscar: '';
  limit: number = 40;
  truncating = true;

  sectionsConfig = {
    imgSize: 3,
    contentSize: 9
  }
  sections: Array<NoticesI>
  constructor(private noticesService:NoticesService) { 
    this.initializeItems();
    this.sections = this.sections.map(item => ({
      ...item,
      showMore: false
    }));
  }
  initializeItems(){
  this.sections= this.noticesService.getAll();
  }
  ngOnInit() {
  }
  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }
  Read() {
    const contador=this.sections.length
    console.log("entre en read");
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");
    this.sections.filter(items=>{
      console.log("que entra:"+contador)
      console.log("id"+items.header.id)
      if (contador==items.header.id) {
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
    })
  }
  buscar(event: any){
    let key: number = 0;
    //console.log("Esto es title list");
    //console.log(titleList);
    const val = event.target.value;
    //console.log("Esto es val");
    //console.log(val);
    //-----
    /*
    const palabra="sierra"
    if (val && val.trim() != ''){
      const escrito=val.toLowerCase();
      console.log(escrito)
      copytitle.filter((elemento)=>{
      const what = elemento.header.title.valueOf()
      const minuscula=what.toLocaleLowerCase();
      for (let index = 0; index < escrito.length; index++) {
        if (escrito.charAt(index)==minuscula.charAt(index)) {
          console.log(index)
          console.log("es igual: "+what)
          var card = document.getElementById("carta");
          //console.log("Numero de la card false "+card)
          card.style.display = "in-block";
        }else{ 
          var card = document.getElementById("carta");
          //console.log("Numero de la card true "+card)
          card.style.display = "none";
          //console.log("else:"+index)
          console.log("no es igual"+what)
        }
      }
      }
      )
      }*/
      //-----
      //-----
      /*
      titleList.filter((element) =>{
        //console.log("este es el evento"+event)
        const texto = element.header.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
       // console.log("Lo que se busca: "+val.toLowerCase());
        const buscado=val.toLowerCase();
        //console.log("booleano"+texto);
        const what = element.header.title.valueOf()
       // console.log("esto es el valor: "+what);
          for (let i = 0; i <titleList.length ; i++){
            if(buscado==what){
            //if (texto == true){
              var card = document.getElementById("carta");
              //console.log("Numero de la card true "+card)
              card.style.display = "none";
              // var card = document.getElementById("carta");
              // card.stylcopytitlee.display = "in-block";         
            } else {
              //  let mostrar = copytitle.push(element.header.title); 
              //  console.log("mostrar");
              //  console.log(mostrar);
                // return this.sections: Array<NoticesI> = mostrar;   
              var card = document.getElementById("carta");
              //console.log("Numero de la card false "+card)
              card.style.display = "in-block";
              // var card = document.getElementById("carta");
              // card.style.display = "none";
            }
          }
      })*/
      //---
      // Reset items back to all of the items
      this.initializeItems()
      // set val to the value of the searchbar
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
         this.sections= this.sections.filter((item) => {
          return (item.header.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
  }

