import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NutritionService } from 'src/app/serveices/nutrition.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  data:[] =[]
  newData:Array<string>=[]
  results:Array<any> = []
  dd:any = localStorage.getItem("data")
  nutdata:Array<string>= JSON.parse(this.dd)

  ngOnInit(): void {
    if(this.nutdata){

      this.nutdata.join(`\n`)
      this.nutrition.controls['recipe'].setValue(this.nutdata)
    }
  }
  nutrition = new FormGroup({
    recipe : new FormControl(null ,[Validators.required] ),
  })

  formData(){
    this.newData = []
    this.data = this.nutrition.controls['recipe'].value.split("\n")
    for(let i=0 ; i<this.data.length ; i++){
      this.newData.push(this.removeSpecials(this.data[i]))
    }
    localStorage.setItem("data",JSON.stringify(this.newData))
    window.location.reload();
  }

  removeSpecials(str:string) {
    var res = "";
     res =  str.replace(/[^0-9a-zA-Z ]/g, '').trim()
    return res;
}
}

// {10}%20{oz}%20{chickpeas}  // %20   " " replace "%20"
