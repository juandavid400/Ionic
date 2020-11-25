import { Component, Input, OnInit } from '@angular/core';
import { NoticesService } from '../services/notices.service';
import { NoticesI } from '../Models/NoticesI';
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
  buscar(event: any){
    let key: number = 0;
    const val = event.target.value;
      this.initializeItems()
      if (val && val.trim() != '') {
         this.sections= this.sections.filter((item) => {
          return (item.header.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
  }

