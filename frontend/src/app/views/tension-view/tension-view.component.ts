import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ITension } from 'src/app/models/ITension.model';
import { TensionServiceService } from '../../services/tension-service.service'




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
          console.log(res)
          this.getTensionsRegisters();
          form.reset()
        },
        err=>console.log(err)
      )
    }else{
      this.tensionService.saveRegsiterTension(form.value).subscribe(
        res => {
          console.log(res)
          this.levelTension = true;
          this.lvlTensionClass= this.tensionService.diagnostic();
          this.getTensionsRegisters()
          form.reset()
          
        },
        err =>console.log(err)
      )
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


  /* creating charts */

  registersForChart: ChartDataset [] = [
    {data: this.getRegistersForCharts(), label:'Registro de tension'}
  ];

  getRegistersForCharts(){
   let registersTemp :any [] =[];
      for (let i=0; i < this.registersTension.length; i ++) {
        registersTemp.push(`${this.registersTension[i].systolic} / ${this.registersTension[i].diastolic} \n${this.registersTension[i].pulse}`)
      }
      return registersTemp;
  }

    
  getLabelsCharts(){
    let labelTemp :any [] =[];
      for (let i=0; i < this.registersTension.length; i ++) {
        labelTemp.push(`${this.registersTension[i].createdAt } `)
      }
      return labelTemp;
  }

  labelsCharts:Label[] = this.getLabelsCharts()
  lineChartOptions: ChartOptions = {
    responsive: true
  };
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
