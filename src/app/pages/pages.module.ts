import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

//RUTAS
import { PAGES_ROUTES } from './pages.routes';

//MODULOS
import { SharedModule } from '../shared/shared.module';

//COMPONENTES
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReservasComponent } from './reservas/reservas.component';

//compartidos
import { GraficasComponent } from '../components/graficas/graficas.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        NoticiasComponent,
        PerfilComponent,
        ReservasComponent,
        GraficasComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ],
    exports: [
        DashboardComponent
    ],
    providers: [],
})

export class PagesModule {}
