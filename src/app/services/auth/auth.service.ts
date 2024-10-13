import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private apiUrl = "localhost:8080/auth";

  constructor(private http: HttpClient) { }

  authLogin(email: String, password: String):Observable<any>{
    this.loggedIn = true;
    return this.http.post<any>('${this.apiUrl}', {email, password});
    
  }

  isLogin(){
    return this.loggedIn;
  }

  logout(){this.loggedIn = false}
}
