import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

// RUTAS
import { APP_ROUTES } from './app.routes';

// MODULOS
import { PagesModule } from './pages/pages.module';

// SERVICIOS
import { ServiceModule } from './services/service.module';


//COMPONENTES SINGLE-PAGES
import { AppComponent } from './app.component';
import { LoginComponent } from "./pages/singles/login/login.component";
import { NotfoundComponent } from './pages/singles/notfound/notfound.component';
//import { GraficasComponent } from './components/graficas/graficas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
    //GraficasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
