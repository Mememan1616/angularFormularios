import { Routes } from "@angular/router";

export default[
    {
        path:'temp',
        loadComponent:()=> import('./temp/temp.component')
    }

]as Routes