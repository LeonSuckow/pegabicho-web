import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PegaBichoAPI } from '../constantAPI.app';

@Injectable()
export class BaseService {
  constructor(private http: HttpClient) { }
  url = PegaBichoAPI;

  getAll() {
    return this.http.get<any>(this.url);
  }

  getById(id: any) {
    return this.http.get<any>(this.url + '/' + id);
  }

  create(json: any) {
    return this.http.post(this.url, json);
  }

  update(id: any, json: any) {
    return this.http.put(this.url + '/' + id, json);
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id);
  }
}