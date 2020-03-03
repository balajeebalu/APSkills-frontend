import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MyProfileService {
  
  

  constructor(private http: HttpClient) {
  }
//get calls for personal details form

getPrefix():Observable<any> {
 return this.http.get('//localhost:8080/prefix');
}
getMaritalStatus():Observable<any> {
  return this.http.get('//localhost:8080/maritalstatus');
 }
 getCommunity():Observable<any> {
  return this.http.get('//localhost:8080/category');
 }
 getReligion():Observable<any> {
  return this.http.get('//localhost:8080/religion');
 }
 getDisability():Observable<any> {
  return this.http.get('//localhost:8080/disability');
 }
 getDisabilityType(disabilityId:any):Observable<any> {
  return this.http.get('//localhost:8080/disability/'+disabilityId+'/typeofdisability');
 }
 getDomicileState():Observable<any> {
  return this.http.get('//localhost:8080/domicilestate');
 }
 getDomicileDistrictforDomicileState(domicileStateId:any):Observable<any> {
  return this.http.get('//localhost:8080/domicilestate/'+domicileStateId+'/domiciledistrict');
 }



//get calls for contact details form
  getAllStates(): Observable<any> {
    return this.http.get('//localhost:8080/states');
  }
  getDistrictsForState(stateId:any): Observable<any> {
    return this.http.get('//localhost:8080/states/'+stateId+'/districts');
  }
  getMandalForDistrict(districtId:any): Observable<any> {
    return this.http.get('//localhost:8080/district/'+districtId+'/mandals');
  }
  getVillageForMandal(mandalId:any): Observable<any> {
    return this.http.get('//localhost:8080/mandal/'+mandalId+'/villages');
  }
  getParliamentaryForState(stateId:any): Observable<any> {
    return this.http.get('//localhost:8080/states/'+stateId+'/parliamentaryes');
  }

  //get calls for education details

  getEducation(): Observable<any> {
    return this.http.get('//localhost:8080/educationdetails');
  }
  getYearOfPassing():Observable<any>{
    return this.http.get('//localhost:8080/yearofpassing');
  }
  getPreTrainingStatus():Observable<any>{
    return this.http.get('//localhost:8080/trainingstatus');
  }
   getExperienceSector():Observable<any>{
    return this.http.get('//localhost:8080/educationsectors');
  } 
  getJobRoleForEducationSector(educationSectorId:any):Observable<any>{
    return this.http.get('//localhost:8080/educationsectors/'+educationSectorId+'/educationjobRoles');
  }
  getMonthsOfExperience():Observable<any>{
    return this.http.get('//localhost:8080/monthsofexperience');
  }
  getEmployed():Observable<any>{
    return this.http.get('//localhost:8080/employed');
  }
  getEmploymentStatus():Observable<any>{
    return this.http.get('//localhost:8080/employmentstatus');
  }

   //get calls for course preferences
   getHeardAboutUs():Observable<any>{
    return this.http.get('//localhost:8080/heardaboutus');
  }
  getAllSectors():Observable<any>{
    return this.http.get('//localhost:8080/sectors');
  }
  getSubsectorsForSectors(sectorId:any):Observable<any>{
    return this.http.get('//localhost:8080/sectors/'+sectorId+'/subsectors');
  }
  getJobrolesForSubsector(subSectorId:any):Observable<any>{
    return this.http.get('//localhost:8080/subsector/'+subSectorId+'/jobroles');
  }

//get calls for declaration
getDeclaration():Observable<any>{
  return this.http.get('//localhost:8080/declarationandsubmission');
}


//post calls when forms are submitted
    public onSubmit(serializedForm) {
     
    return this.http.post('//localhost:8080/page',serializedForm,{
              headers:new HttpHeaders({
                  'Content-Type' :'application/json',
              })

    });
  
    
}
public onSubmitContactForm(serializedContactDetailsForm) {
     
  return this.http.post('//localhost:8080/communicationaddress',serializedContactDetailsForm,{
            headers:new HttpHeaders({
                'Content-Type' :'application/json',
            })

  });
 
  
}
public onSubmitEducationForm(serializedEducationDetailsForm) {
     
  return this.http.post('//localhost:8080/educationdetails',serializedEducationDetailsForm,{
            headers:new HttpHeaders({
                'Content-Type' :'application/json',
            })

  });
 
  
}

public onSubmitCoursePreferencesForm(serializedCoursePreferencesForm) {
     
  return this.http.post('//localhost:8080/coursepreference',serializedCoursePreferencesForm,{
            headers:new HttpHeaders({
                'Content-Type' :'application/json',
            })

  });
 
  
}

public onSubmitDeclarationForm(declarationForm) {
     
  return this.http.post('//localhost:8080/declarationandsubmission',declarationForm,{
            headers:new HttpHeaders({
                'Content-Type' :'application/json',
            })

  });
 
  
}




        
               
}      
     
   
  


