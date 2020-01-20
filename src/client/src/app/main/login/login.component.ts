import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router :Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      usuario: new FormControl("deyxonh", Validators.required),
      password: new FormControl("mafalu04", [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  ngLogin() {
    if (!this.loginForm.valid) {
    } else {
      this.authService.login(this.loginForm.value).subscribe(
        (resp: any) => {
          this.authService.createSession(resp.token, resp.user);
          this.router.navigate(['dashboard'])          
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
