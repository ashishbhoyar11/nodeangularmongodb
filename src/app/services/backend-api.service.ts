import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(
    private http:HttpClient
  ) { }

  registerUser(regData)
  {
    console.log('Register'+JSON.stringify(regData));
    return this.http.post('http://localhost:3000/register',regData);
  }

  loginUser(userData)
  {
    return this.http.post('http://localhost:3000/login',userData);
  }
}
