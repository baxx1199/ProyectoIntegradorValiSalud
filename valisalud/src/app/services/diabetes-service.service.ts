import { Injectable } from '@angular/core';
import { IDiabetes} from '../models/IDiabetes.model';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiabetesServiceService {

  URL_API:string = 'http://localhost:4040/api/diabetes'

newRegister:IDiabetes = {
  blood_glucose:0,
  blood_glucoseSecond:0,
  last_time_eat:0
}

  constructor(private http:HttpClient) { }

  getRegisterDiabetes():Observable<IDiabetes[]>{
    
    
    return this.http.get<IDiabetes[]>(this.URL_API)
    .pipe(
      catchError(this.handleError)
    );
  }

  saveRegsiterDiabetes(newRegister:IDiabetes){
    return this.http.post(this.URL_API,newRegister);
  }

  private handleError(error: HttpErrorResponse){
  
    return throwError(error.message);
  }
  /* diagnostico ac1 */
  diagnosticAC1(a:number = this.newRegister.blood_glucose , b:number = this.newRegister.blood_glucoseSecond ? this.newRegister.blood_glucoseSecond : 0){
    let lvlDiabetesClass = 'normal'
    if(a >= 6.5 && b >= 6.5){
      lvlDiabetesClass= 'diad'
    }else if(a >= 5.7 && a<= 6.4&& b >= 5.7 && b<= 6.4){
      lvlDiabetesClass = 'preD'
    }else if(a > 5.7 && b > 5.7){
      lvlDiabetesClass = 'normal'
    }
    return lvlDiabetesClass;
  }

  /* aleatorio */
  diagnosticAlt(a:number = this.newRegister.blood_glucose){
    let lvlDiabetesClass = 'normal'
    if(a >= 200 ){
      lvlDiabetesClass= 'diad'
    }else{
      lvlDiabetesClass= 'normal'
    }
    return lvlDiabetesClass;
  }

  /* ayunas */
  diagnosticAyu(a:number = this.newRegister.blood_glucose){
    let lvlDiabetesClass = 'normal'
    if(a >= 126 ){
      lvlDiabetesClass= 'diad'
    }else if(a >= 100 && a<= 125 ){
      lvlDiabetesClass = 'preD'
    }else if(a > 100){
      lvlDiabetesClass = 'normal'
    }
    return lvlDiabetesClass;
  }

/* diagnostico prueba toleracia */

diagnosticTol(a:number = this.newRegister.blood_glucose, b:number =this.newRegister.last_time_eat){
  let lvlDiabetesClass = 'normal'
  if(a >= 200 && b >= 120 ){
    lvlDiabetesClass= 'diad'
  }else if(a >= 140 && a <= 199 && b >= 120 ){
    lvlDiabetesClass = 'preD'
  }else if(a < 140 && b>= 120){
    lvlDiabetesClass = 'normal'
  }
  return lvlDiabetesClass;
}

  deleteRegister(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updateRegister(currencyRegister:IDiabetes){
    return this.http.put(`${this.URL_API}/${currencyRegister._id}`, currencyRegister)
  }
}
