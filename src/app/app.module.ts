import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { SearchApplyComponent } from './search-apply/search-apply.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RecaptchaModule } from 'angular-google-recaptcha';
import { FormsModule } from '@angular/forms';
import { AssessorComponent } from './assessor/assessor.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchBatchesComponent } from './search-batches/search-batches.component';
import { ViewBatchesComponent } from './view-batches/view-batches.component';
import { ViewCertificatesComponent } from './view-certificates/view-certificates.component';
import { AssessmentBatchesComponent } from './assessment-batches/assessment-batches.component';
import { AssessorViewBatchesComponent } from './assessor-view-batches/assessor-view-batches.component';
import { CancelledBatchesComponent } from './cancelled-batches/cancelled-batches.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ContactAddressComponent } from './contact-address/contact-address.component';
import { CandidateRegistrationFormComponent } from './candidate-registration-form/candidate-registration-form.component';
import { DashboardCandidateComponent } from './dashboard-candidate/dashboard-candidate.component';
import { ViewBatchesCandidateComponent } from './view-batches-candidate/view-batches-candidate.component';
import { ViewMyBatchesCandidateComponent } from './view-my-batches-candidate/view-my-batches-candidate.component';
import { ViewAllTrainingCentresCandidateComponent } from './view-all-training-centres-candidate/view-all-training-centres-candidate.component';
import { ViewAllRozgarMelasCandidateComponent } from './view-all-rozgar-melas-candidate/view-all-rozgar-melas-candidate.component';
import { ViewAddPreferencesCandidateComponent } from './view-add-preferences-candidate/view-add-preferences-candidate.component';
import { MyProfileCandidateComponent } from './my-profile-candidate/my-profile-candidate.component';
import { EnrolledRozgarmelaCandidateComponent } from './enrolled-rozgarmela-candidate/enrolled-rozgarmela-candidate.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DataTableModule } from 'ng-angular8-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { ArchwizardModule } from 'angular-archwizard';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AssessmentComponent,
    SearchApplyComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    AssessorComponent,
    MyProfileComponent,
    SearchBatchesComponent,
    ViewBatchesComponent,
    ViewCertificatesComponent,
    AssessmentBatchesComponent,
    AssessorViewBatchesComponent,
    CancelledBatchesComponent,
    EditProfileComponent,
    ContactAddressComponent,
    CandidateRegistrationFormComponent,
    DashboardCandidateComponent,
    ViewBatchesCandidateComponent,
    ViewMyBatchesCandidateComponent,
    ViewAllTrainingCentresCandidateComponent,
    ViewAllRozgarMelasCandidateComponent,
    ViewAddPreferencesCandidateComponent,
    MyProfileCandidateComponent,
    EnrolledRozgarmelaCandidateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    DataTableModule,
    ReactiveFormsModule, 
    HttpClientModule,
    DataTablesModule,
    NgbModule,
    ArchwizardModule,
  
    FileUploadModule,
    BsDatepickerModule.forRoot(),
    RecaptchaModule.forRoot({
      siteKey: '6Lcgq9YUAAAAAHk4WH8GglapEtBwwY1C2jaJ4AJ-'
  }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
