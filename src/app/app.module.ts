import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {ListService} from './shared/services/list.service';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatChipsModule, MatStepperModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatDialogModule, MatExpansionModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule, MatMenuModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatRippleModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import { TaskDetailComponent } from './main/dashboard/task-detail/task-detail.component';
import { FabComponent } from './shared/components/fab/fab.component';
import { NewtodoDialogComponent } from './shared/components/dialogs/newtodo-dialog/newtodo-dialog.component';
import {FormsModule} from '@angular/forms';
import { EditorComponent } from './main/editor/editor.component';
import { NoteComponent } from './shared/components/note/note.component';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {HttpClientModule} from "@angular/common/http";
import {CouchService} from "./shared/services/couch.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TaskDetailComponent,
    FabComponent,
    NewtodoDialogComponent,
    EditorComponent,
    NoteComponent,
    SearchFilterPipe,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  entryComponents: [
    NewtodoDialogComponent
  ],
  providers: [ListService, CouchService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
