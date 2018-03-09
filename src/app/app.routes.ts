import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/singles/login/login.component';
import { NotfoundComponent } from './pages/singles/notfound/notfound.component';

const appRoutes : Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', component: NotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash:true });
