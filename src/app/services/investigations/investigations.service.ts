import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investigaciones } from 'src/app/models/investigacion';

@Injectable({
  providedIn: 'root'
})
export class InvestigationsService {

  private urlBack = "localhost:8080/v1";

  constructor(private http:HttpClient) { }

  getInvestigaciones(): Observable<Investigaciones[]>{
    return this.http.get<Investigaciones[]>(this.urlBack);
  }
}
