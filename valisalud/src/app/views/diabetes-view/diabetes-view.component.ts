import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IDiabetes } from 'src/app/models/IDiabetes.model';
import { DiabetesServiceService } from 'src/app/services/diabetes-service.service';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-Diabetes-view',
  templateUrl: './Diabetes-view.component.html',
  styleUrls: ['./Diabetes-view.component.css']
})
export class DiabetesViewComponent implements OnInit {

  registersDiabetes:IDiabetes []=[];
  visibilityRec:boolean = false;
  lvlDiabetesClass:string = '';
  tVisisbility:string ='';

  constructor(public diabetesService:DiabetesServiceService) { }

  ngOnInit(): void {
    this.getDiabetesRegisters()
  }

  getDiabetesRegisters(){
    this.diabetesService.getRegisterDiabetes().subscribe(
      res => {
        this.registersDiabetes= res
        console.log(res)
        console.log(this.registersDiabetes)
      },
      err => {
        console.log(err)
      }
    )
  }

  seeComp(event:any){
    
      this.tVisisbility= event.target.value;
}

  addRegisterDiabetes(form:NgForm){

    if (form.value._id) {
      this.diabetesService.updateRegister(form.value).subscribe(
        res=>{
          this.getDiabetesRegisters();
          form.reset()
        },
        err=>console.log(err)
      )
    }else{
      this.diabetesService.saveRegsiterDiabetes(form.value).subscribe(
        
      )
      this.visibilityRec = true;
      /* this.lvlDiabetesClass = this.diabetesService.diagnostic(); */
      this.getDiabetesRegisters()
    }
  }

  

  deleteRegister(_id:any){
    
    console.log(typeof(_id))
     if(confirm("¿Deseas eliminar este registro?")){
      this.diabetesService.deleteRegister(_id).subscribe(
        res=>{console.log(res), 
            this.getDiabetesRegisters();
        },
        err => console.log(err)
      )
      
    }
    
    
  }

  editRegister(currencyRegister: IDiabetes){
    this.diabetesService.newRegister = currencyRegister;
  }


}

