import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./main/login/login.component";
import { UserComponent } from "./components/user/user.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { IsLoginGuard } from "./guards/is-login.guard";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    // canActivate:[IsLoginGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [{ path: "user/:id", component: UserComponent }]
  }
  //   {
  //     path: "user:/id",
  //     component: UserComponent
  //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
