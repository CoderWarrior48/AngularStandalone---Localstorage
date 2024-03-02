import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getData(key: any) {
   return {key: key, value: localStorage.getItem(key)}
  }

  addData(data: any) {
    localStorage.setItem(data.key, data.value);
  }
}
