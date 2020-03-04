import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  {LandingPageComponent} from './landing-page/landing-page.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

import { CandidateRegistrationFormComponent } from './candidate/candidate-registration-form/candidate-registration-form.component';
import { DashboardCandidateComponent } from './candidate/dashboard-candidate/dashboard-candidate.component';
import { ViewBatchesCandidateComponent } from './candidate/view-batches-candidate/view-batches-candidate.component';
import { ViewMyBatchesCandidateComponent } from './candidate/view-my-batches-candidate/view-my-batches-candidate.component';
import { ViewAllTrainingCentresCandidateComponent } from './candidate/view-all-training-centres-candidate/view-all-training-centres-candidate.component';
import { ViewAllRozgarMelasCandidateComponent } from './candidate/view-all-rozgar-melas-candidate/view-all-rozgar-melas-candidate.component';
import { MyProfileCandidateComponent } from './candidate/my-profile-candidate/my-profile-candidate.component';
import { EnrolledRozgarmelaCandidateComponent } from './candidate/enrolled-rozgarmela-candidate/enrolled-rozgarmela-candidate.component';
import { AssessmentComponent } from './assessorModule/assessment/assessment.component';
import { ViewAddPreferencesCandidateComponent } from './candidate/view-add-preferences-candidate/view-add-preferences-candidate.component';
import { AssessorComponent } from './assessorModule/assessor/assessor.component';
import { MyProfileComponent } from './assessorModule/my-profile/my-profile.component';
import { SearchApplyComponent } from './assessorModule/search-apply/search-apply.component';
import { SearchBatchesComponent } from './assessorModule/search-batches/search-batches.component';
import { ViewCertificatesComponent } from './assessorModule/view-certificates/view-certificates.component';
import { ViewBatchesComponent } from './assessorModule/view-batches/view-batches.component';
import { AssessorViewBatchesComponent } from './assessorModule/assessor-view-batches/assessor-view-batches.component';
import { AssessmentBatchesComponent } from './assessorModule/assessment-batches/assessment-batches.component';
import { EditProfileComponent } from './assessorModule/edit-profile/edit-profile.component';
import { CancelledBatchesComponent } from './assessorModule/cancelled-batches/cancelled-batches.component';
import { ContactAddressComponent } from './assessorModule/contact-address/contact-address.component';
import { DashboardTrainerComponent } from './trainerModule/dashboard-trainer/dashboard-trainer.component';
import { SearchBatchesTrainerComponent } from './trainerModule/search-batches-trainer/search-batches-trainer.component';
import { ViewBatchesTrainerComponent } from './trainerModule/view-batches-trainer/view-batches-trainer.component';
import { CertificateRequestsTrainerComponent } from './trainerModule/certificate-requests-trainer/certificate-requests-trainer.component';
import { TrainerComponent } from './trainerModule/trainer/trainer.component';
import { MyProfileTrainerComponent } from './trainerModule/my-profile-trainer/my-profile-trainer.component';

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

/* trainer pages */
{
  path:'trainer-dashboard',
  component:DashboardTrainerComponent,   
},
{path:'searchBatches-trainer',
component:SearchBatchesTrainerComponent,
},
{path:'viewBatches-trainer',
component:ViewBatchesTrainerComponent,
},
{path:'certificateRequests-trainer',
component:CertificateRequestsTrainerComponent,
},
{path:'trainer',
component:TrainerComponent,
},
{path:'myProfile-trainer',
component:MyProfileTrainerComponent,
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