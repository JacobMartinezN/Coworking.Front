import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NoticiasComponent } from "./noticias/noticias.component";
import { PerfilComponent } from './perfil/perfil.component';
import { ReservasComponent } from './reservas/reservas.component';

const pagesRoutes : Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
            { path: 'noticias', component: NoticiasComponent, data: { title: 'Noticias'} },
            { path: 'perfil', component: PerfilComponent, data: { title: 'Perfil'} },
            { path: 'reservas', component: ReservasComponent, data: { title: 'Reservas'} },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
