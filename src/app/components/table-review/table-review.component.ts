import { Component, OnInit } from '@angular/core';
import { NutritionService } from 'src/app/serveices/nutrition.service';

@Component({
  selector: 'app-table-review',
  templateUrl: './table-review.component.html',
  styleUrls: ['./table-review.component.scss']
})
export class TableReviewComponent implements OnInit {
  dd:any = localStorage.getItem("data")
  nutdata:Array<any> = JSON.parse(this.dd)
  result:Array<any> = []
  de:Array<any> = []
  constructor(private _NutritionService:NutritionService) { }

  ngOnInit(): void {
    if(this.nutdata)
    for(let i = 0 ; i<this.nutdata.length ; i++){
      this._NutritionService.getNutrition(this.nutdata[i]).subscribe(res =>{
        this.de = this.nutdata[i].split(" ")
        this.result.push({
          text:{
          text1:this.nutdata[i],
          quantity:this.de[0],
          food:this.de[2],
          unit:this.de[1],
          data:res
        }
      }
        )
      })
    }
  }

  getRound(data:any){
    let res = Math.floor(data)
    return res;
  }
}
