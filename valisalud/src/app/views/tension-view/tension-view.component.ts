import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ITension } from 'src/app/models/ITension.model';
import { TensionServiceService } from '../../services/tension-service.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-tension-view',
  templateUrl: './tension-view.component.html',
  styleUrls: ['./tension-view.component.css']
})
export class TensionViewComponent implements OnInit {

  registersTension:ITension []=[];
  levelTension:boolean = false;
  lvlTensionClass:string = '';

  constructor(public tensionService:TensionServiceService) { }

  ngOnInit(): void {
    this.getTensionsRegisters()
  }

  getTensionsRegisters(){
    this.tensionService.getRegisterTension().subscribe(
      res => {
        this.registersTension= res
        console.log(res)
        console.log(this.registersTension)
      },
      err => {
        console.log(err)
      }
    )
  }



  addRegisterTension(form:NgForm){

    if (form.value._id) {
      this.tensionService.updateRegister(form.value).subscribe(
        res=>{
          this.getTensionsRegisters();
          form.reset()
        },
        err=>console.log(err)
      )
    }else{
      this.tensionService.saveRegsiterTension(form.value).subscribe(
        
      )
      this.levelTension = true;
      this.lvlTensionClass = this.tensionService.diagnostic();
      this.getTensionsRegisters()
    }
  }

  

  deleteRegister(_id:any){
    
    console.log(typeof(_id))
     if(confirm("¿Deseas eliminar este registro?")){
      this.tensionService.deleteRegister(_id).subscribe(
        res=>{console.log(res), 
            this.getTensionsRegisters();
        },
        err => console.log(err)
      )
      
    }
    
    
  }

  editRegister(currencyRegister: ITension){
    this.tensionService.newRegister = currencyRegister;
  }


}
