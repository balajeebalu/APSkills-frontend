import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import  {LandingPageComponent} from './landing-page/landing-page.component';
import {SearchApplyComponent} from  './search-apply/search-apply.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AssessorComponent } from './assessor/assessor.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchBatchesComponent } from './search-batches/search-batches.component';
import { ViewBatchesComponent } from './view-batches/view-batches.component';
import { ViewCertificatesComponent } from './view-certificates/view-certificates.component';
import { AssessorViewBatchesComponent } from './assessor-view-batches/assessor-view-batches.component';
import { AssessmentBatchesComponent } from './assessment-batches/assessment-batches.component';
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

const routes: Routes = [
  {
    path: 'assessment',
    component: AssessmentComponent,
    children: [                      
    /*   {path:'',
      component:AssessorComponent}, */
         

      
    ] 
  },
  {path:'assessor',
component:AssessorComponent},
{path:'my-profile',
component:MyProfileComponent},

{
  path: 'landing',
  component: LandingPageComponent,
},
{
path: '',
component: LandingPageComponent,
},
{
  path:'search-apply',
 component:SearchApplyComponent,
}, 
{
  path:'search-batches',
  component:SearchBatchesComponent,
},
{
  path:'view-certificates',
  component:ViewCertificatesComponent,
},
{
  path:'view-batches',
  component:ViewBatchesComponent,
},
{
  path:'assessor',
  component:AssessorComponent,
},
{
  path:'assessor-view-batches',
  component:AssessorViewBatchesComponent,
},
{
  path:'assessment-batches',
  component:AssessmentBatchesComponent,
},
{
  path:'edit-profile',
  component:EditProfileComponent,
},
{
  path:'cancelled-batches',
  component:CancelledBatchesComponent,
},
{
  path:'contact-address',
  component:ContactAddressComponent,
},
/* {
  path:'education-work',
  component:EducationWorkComponent,
}, */
{path:'login',
component:LoginPageComponent,
},
{path:'registration',
component:RegistrationPageComponent},
{
  path:'candidate-registration-form',
  component:CandidateRegistrationFormComponent,
},

/* candidate pages */
{
  path:'candidate',
  component:DashboardCandidateComponent,
},
{
  path:'candidate-viewbatches',
  component:ViewBatchesCandidateComponent,
},
{
  path:'candidate-viewmybatches',
  component:ViewMyBatchesCandidateComponent,
},
{
  path:'candidate-viewalltrainingcentres',
  component:ViewAllTrainingCentresCandidateComponent,
},
{
  path:'candidate-viewallrozgarmelas',
  component:ViewAllRozgarMelasCandidateComponent,
},
{
  path:'candidate-enrolledrozgarmelas',
  component:EnrolledRozgarmelaCandidateComponent,
},
{
  path:'candidate-viewpreferences',
  component:ViewAddPreferencesCandidateComponent,
},
{
  path:'candidate-myprofile',
  component:MyProfileCandidateComponent,
},

]
@NgModule({
  imports: [RouterModule.forRoot(routes),
   
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AssessorComponent,
  MyProfileComponent,
  SearchApplyComponent,
  LoginPageComponent,
  RegistrationPageComponent,
  SearchBatchesComponent,
  ViewBatchesComponent,
  ViewCertificatesComponent,
  AssessorComponent,
  AssessmentBatchesComponent,
  AssessorViewBatchesComponent,
  CancelledBatchesComponent,
  EditProfileComponent,
  CandidateRegistrationFormComponent,
  ContactAddressComponent,
//candidate pages
  DashboardCandidateComponent,
  ViewBatchesCandidateComponent,
  ViewMyBatchesCandidateComponent,
  ViewAllTrainingCentresCandidateComponent,
  ViewAllRozgarMelasCandidateComponent,
  ViewAddPreferencesCandidateComponent,
  MyProfileCandidateComponent,
  EnrolledRozgarmelaCandidateComponent
];