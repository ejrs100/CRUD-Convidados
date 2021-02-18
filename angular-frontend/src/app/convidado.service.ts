import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convidado } from './convidado';

@Injectable({
  providedIn: 'root'
})
export class ConvidadoService {

  private baseURL = "http://localhost:8080/api/v1/convidados";
  constructor(private HttpClient: HttpClient) { }

  getListaConvidados(): Observable<Convidado[]>{
    return this.HttpClient.get<Convidado[]>(`${this.baseURL}`);
  }

  createConvidado(convidado: Convidado): Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}`, convidado);
  }

  getConvidadoById(id:number): Observable<Convidado>{
    return this.HttpClient.get<Convidado>(`${this.baseURL}/${id}`);
  }

  updateConvidado(id:number, convidado: Convidado): Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/${id}`, convidado);
  }

  deleteConvidado(id: number): Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }
}
