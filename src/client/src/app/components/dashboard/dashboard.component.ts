import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { NgForm } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  users: any;
  user: any;
  updated: boolean = false;
  constructor(public userService: UserService, public authService :AuthService) {}

  ngOnInit() {
    if(this)
    this.userService.getUsers().subscribe(
      resp => {
        this.users = resp;
      },
      error => {}
    );
  }


  ngCerrarSesion(){
    this.authService.cerrarSesion()
  }

  ngGetById(id) {
    this.userService.getUser(id).subscribe(
      resp => {
        this.user = resp[0];
        console.log(this.user);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngupdate(forma: NgForm) {
    if (forma.value.usuario && forma.value.nombre && forma.value.email) {
      this.userService.updateUser(this.user.cedula, forma.value).subscribe(
        resp => {
          this.user = resp[0];
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  ngDetele() {
    this.userService.deleteUser(this.user.cedula).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }
}
