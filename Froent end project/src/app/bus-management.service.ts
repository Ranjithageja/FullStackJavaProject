import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { BusManagement } from './busManagement';

@Injectable({
  providedIn: 'root'
})
export class BusManagementService {
  private baseURL = "http://localhost:8080/BusManagement.com/busManagements";
   constructor(private httpClient: HttpClient) { }
  getBusManagementList(): Observable<BusManagement[]>{
    return this.httpClient.get<BusManagement[]>(`${this.baseURL}`);
  }

  createBusManagement(busManagement: BusManagement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, busManagement);
  }

  getBusManagementById(id: number): Observable<BusManagement>{
    return this.httpClient.get<BusManagement>(`${this.baseURL}/${id}`);
  }

  updateBusManagement(id: number, busManagement: BusManagement): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, busManagement);
  }

  
  deleteBusManagement(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
deleteAll(): Observable<any> {
  return this.httpClient.delete(`${this.baseURL}`);
}
findByAcBus(): Observable<BusManagement[]>{
  return this.httpClient.get<BusManagement[]>(`${this.baseURL}/AcBus`);
}
findByNonAcBus(): Observable<BusManagement[]>{
  return this.httpClient.get<BusManagement[]>(`${this.baseURL}/NonAcBus`);
}
findBystartingPoint(startingPoint: any): Observable<BusManagement[]>{
  return this.httpClient.get<BusManagement[]>(`${this.baseURL}?startingPoint=${startingPoint}`);
}
updateBusSeatsDetails(busId: number, busManagement: BusManagement): Observable<Object> {
  return this.httpClient.put(`${this.baseURL}/${busId}`, busManagement);
}
}

