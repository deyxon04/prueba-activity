import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class IsLoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    if (this.authService.user) {
      this.router.navigate(["/dashboard"]);
      return true;
    }
    this.router.navigate(['/login'])
    return false
  }
}
