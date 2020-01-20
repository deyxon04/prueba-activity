import { Injectable } from "@angular/core";
import { GLOBAL } from "../GLOBAL";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  url = GLOBAL.url_backend + "user";

  getUsers() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `${this.authService.token}`
    });
    return this.http.get(this.url, { headers: headers });
  }

  getUser(id) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `${this.authService.token}`
    });
    return this.http.get(this.url + "/" + id, { headers: headers });
  }

  updateUser(id, data){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `${this.authService.token}`
    });
    return this.http.put(this.url + "/" + id, data,{ headers: headers });
  }

  deleteUser(id){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `${this.authService.token}`
    });
    return this.http.delete(this.url + "/" + id,{ headers: headers });
  }
}
