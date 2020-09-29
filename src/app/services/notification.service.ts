import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private httpClient: HttpClient) { }

  public getNotifications(){
    return this.httpClient.get('https://fast-lowlands-95849.herokuapp.com/api/common/getBanner');
  }
}
