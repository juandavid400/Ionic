import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Title } from '@angular/platform-browser';
import { title } from 'process';
// const db = require('../DataBase/notices.JSON');
import db from "../DataBase/notices.json";
import { NoticesI } from '../Models/NoticesI';
import { Usuario } from '../Models/UsersI';


@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  constructor(private http: HttpClient) { }

 getAll(): Array<NoticesI> {
    const notices: Array<NoticesI> = db;
    return notices
  }

  tecnologia(){
      return this.http.get<NoticesI[]>('http://localhost:3000/notices');
  }

  deportes(){
    return this.http.get<NoticesI[]>('http://localhost:3000/deportes');
  }

  ciences(){
    return this.http.get<NoticesI[]>('http://localhost:3000/ciencia');
  }

  getAllNotices(){
    return this.http.get<Component[]>('../DataBase/notices.json');
  }
  
  getNotices(){
    return this.http.get<any[]>('../DataBase/notices.json');
  }
}
