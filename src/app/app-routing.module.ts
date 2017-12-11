import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './main/dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {TaskDetailComponent} from './main/dashboard/task-detail/task-detail.component';
import {EditorComponent} from './main/editor/editor.component';
import {AuthGuard} from "./auth/auth-guard.service";
import {SigninComponent} from "./auth/signin/signin.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'editor', component: EditorComponent, canActivate: [AuthGuard] , children: [
    {path: ':id', component: TaskDetailComponent}
  ]},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
