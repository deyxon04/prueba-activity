import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "../GLOBAL";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url = GLOBAL.url_backend + "auth";
  token : string
  user : any
  constructor(private http: HttpClient, private router :Router) {
    this.token = localStorage.getItem('token')
    this.user = JSON.parse(localStorage.getItem('user'))
  }
  login(body) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
      // Authorization: `${this.userService.token}`
    });
    return this.http.post(this.url + "/signin", body, { headers: headers });
  }

  createSession(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  cerrarSesion(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
