import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModuel } from '../models/loginModule';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModule } from '../models/tokenModule';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44377/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModuel){
    return this.httpClient.post<SingleResponseModel<TokenModule>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
