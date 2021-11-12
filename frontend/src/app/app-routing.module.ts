
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from "./views/main-view/main-view.component";
import { TensionViewComponent } from "./views/tension-view/tension-view.component";

const routes: Routes =[
    {path:'', redirectTo:'', pathMatch:'full' },
    {path: '',component: MainViewComponent},
    {path: '/tension', component: TensionViewComponent}

]

@NgModule({
    imports:[
        RouterModule.forRoot(
            routes
        )
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}
/* export const routingComponents= [MainViewComponent,TensionViewComponent] */