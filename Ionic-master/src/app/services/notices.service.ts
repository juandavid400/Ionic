import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title } from 'process';
// const db = require('../DataBase/notices.JSON');
import db from "../DataBase/notices.json";
import { NoticesI } from '../Models/NoticesI';


@Injectable({
  providedIn: 'root'
})
export class NoticesService {

 getAll(): Array<NoticesI> {
    const notices: Array<NoticesI> = db;
    return notices
  }
  
  // getTitle(): any {
  //   const infoTitle = db.filter(element => {
  //     console.log(element.header.title);
  //     return element.header.title;
  //   });
  // }

  constructor() { }
}
