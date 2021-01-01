import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = `${environment.baseUrl}/Auth/IsAuthendicated`;


  constructor(private httpClinet:HttpClient) { }

public  isAuthendicated(email:string,password:string){


    let adminUser={email:email,password:password}

  return this.httpClinet.post<any>(`${this.apiUrl}`,adminUser);

  }

}


