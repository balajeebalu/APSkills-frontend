import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RecaptchaModule } from 'angular-google-recaptcha';
import { FormsModule } from '@angular/forms';

import { CandidateRegistrationFormComponent } from './candidate/candidate-registration-form/candidate-registration-form.component';
import { DashboardCandidateComponent } from './candidate/dashboard-candidate/dashboard-candidate.component';
import { ViewBatchesCandidateComponent } from './candidate/view-batches-candidate/view-batches-candidate.component';
import { ViewMyBatchesCandidateComponent } from './candidate/view-my-batches-candidate/view-my-batches-candidate.component';
import { ViewAllTrainingCentresCandidateComponent } from './candidate/view-all-training-centres-candidate/view-all-training-centres-candidate.component';
import { ViewAllRozgarMelasCandidateComponent } from './candidate/view-all-rozgar-melas-candidate/view-all-rozgar-melas-candidate.component';

import { MyProfileCandidateComponent } from './candidate/my-profile-candidate/my-profile-candidate.component';
import { EnrolledRozgarmelaCandidateComponent } from './candidate/enrolled-rozgarmela-candidate/enrolled-rozgarmela-candidate.component';
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
import { AssessmentComponent } from './assessorModule/assessment/assessment.component';
import { SearchApplyComponent } from './assessorModule/search-apply/search-apply.component';
import { AssessorComponent } from './assessorModule/assessor/assessor.component';
import { MyProfileComponent } from './assessorModule/my-profile/my-profile.component';
import { SearchBatchesComponent } from './assessorModule/search-batches/search-batches.component';
import { ViewBatchesComponent } from './assessorModule/view-batches/view-batches.component';
import { ViewCertificatesComponent } from './assessorModule/view-certificates/view-certificates.component';
import { AssessmentBatchesComponent } from './assessorModule/assessment-batches/assessment-batches.component';
import { AssessorViewBatchesComponent } from './assessorModule/assessor-view-batches/assessor-view-batches.component';
import { CancelledBatchesComponent } from './assessorModule/cancelled-batches/cancelled-batches.component';
import { EditProfileComponent } from './assessorModule/edit-profile/edit-profile.component';
import { ContactAddressComponent } from './assessorModule/contact-address/contact-address.component';
import { ViewAddPreferencesCandidateComponent } from './candidate/view-add-preferences-candidate/view-add-preferences-candidate.component';
import { DashboardTrainerComponent } from './trainerModule/dashboard-trainer/dashboard-trainer.component';
import { SearchBatchesTrainerComponent } from './trainerModule/search-batches-trainer/search-batches-trainer.component';
import { HeaderComponent } from './trainerModule/header/header.component';
import { ViewBatchesTrainerComponent } from './trainerModule/view-batches-trainer/view-batches-trainer.component';
import { CertificateRequestsTrainerComponent } from './trainerModule/certificate-requests-trainer/certificate-requests-trainer.component';
import { TrainerComponent } from './trainerModule/trainer/trainer.component';
import { MyProfileTrainerComponent } from './trainerModule/my-profile-trainer/my-profile-trainer.component';
import { CandidateHeaderComponent } from './candidate/candidate-header/candidate-header.component';


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
    DashboardTrainerComponent,
    SearchBatchesTrainerComponent,
    HeaderComponent,
    ViewBatchesTrainerComponent,
    CertificateRequestsTrainerComponent,
    TrainerComponent,
    MyProfileTrainerComponent,
    CandidateHeaderComponent,
    
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
    AngularFontAwesomeModule,
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
