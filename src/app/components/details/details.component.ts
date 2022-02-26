import { Component, OnInit } from '@angular/core';
import { NutritionService } from 'src/app/serveices/nutrition.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dd:any = localStorage.getItem("data")
  nutdata:any = JSON.parse(this.dd)
  ingr:any
  result:any
  constructor(private _NutritionService:NutritionService) { }

  ngOnInit(): void {
      this._NutritionService.postNutrition({"ingr":this.nutdata}).subscribe(res =>{
        this.result = res
      })

  }
  getRound(data:any){
    let res = Math.floor(data)
    return res;
  }
}
