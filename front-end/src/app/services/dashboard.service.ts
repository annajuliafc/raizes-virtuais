import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dashboard } from '../models/Dashboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  urlApi = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getDashboardData(): Observable<Dashboard> {
    return this.httpClient.get<Dashboard>(this.urlApi + `/dashboard`);
  }
}
