import { Routes } from "@angular/router";

export default[

{
    path:'ejemplo1',
    loadComponent:() => import('./ejemplo1/ejemplo1.component')
},
{
    path:'ejemplo2',
    loadComponent:() => import('./ejemplo2/ejemplo2.component')
},
{
    path:'resistencias',
    loadComponent:() => import('./resistencias/resistencias.component')
},
{
    path:'cine',
    loadComponent:() => import('./cine/cine.component')
}

] as Routes