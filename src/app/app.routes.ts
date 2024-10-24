import { Routes } from '@angular/router';

export const routes: Routes = [

    //Importa las rutas de sus demas modulos
    {
        //en este caso busca el archivo de rutas de un componente, en este caso  es auth.routes.ts
        path:'auth',
        loadChildren:() => import('./auth/features/auth.routes')
    },

    {

        path:'formularios',
        loadChildren:() => import('./formularios/formularios.routes')
    },

    {
        path:'tem',
        loadChildren:()=> import('./tem/temp.routes')
    }
];
