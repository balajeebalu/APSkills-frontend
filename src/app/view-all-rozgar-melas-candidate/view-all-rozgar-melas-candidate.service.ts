import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ViewRozgarMelaService {
    getMela: any;
    getFormData: any;
  
    constructor(private  http : HttpClient){

    }
    getAllDistricts(): Observable<any> {
        return this.http.get('//localhost:8080/districts');
        }
     
    getAllMelas(): Observable<any> {
        return this.http.get('//localhost:8080/apply');
        }
        onSubmit(districtId:any, melaStartDate:any,melaEndDate:any): Observable<any>  {
            return this.http.get('//localhost:8080/melas?districtId='+districtId+'melaStartDate'+melaStartDate+'melaEndDate'+melaEndDate);
            

}
}