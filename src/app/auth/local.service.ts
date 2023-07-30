import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  createLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
