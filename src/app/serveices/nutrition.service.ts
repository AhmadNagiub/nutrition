import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  appID = '86f6e0c8' ;
  appKEY = '631ea327324a7153544ad5a434120930';
  nutritionTYPE= 'cooking';
  // 10%20oz%20chickpeas
  PostURL = "https://api.edamam.com/api/nutrition-details?app_id=86f6e0c8&app_key=631ea327324a7153544ad5a434120930&force=true"
  StaticURL = `https://api.edamam.com/api/nutrition-data?app_id=${this.appID}&app_key=${this.appKEY}&nutrition-type=${this.nutritionTYPE}&`
  constructor(private _HttpClient:HttpClient) { }
  getNutrition(data:any):Observable<any>{
    return this._HttpClient.get(`${this.StaticURL}ingr=${data}`)
  }
  postNutrition(data:any):Observable<any>{
    return this._HttpClient.post(`${this.PostURL}` , data)
  }
}
