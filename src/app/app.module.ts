import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SubrouteComponent } from './subroute/subroute.component';

import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { BlockchainsComponent } from './blockchains/blockchains.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { MtgComponent } from './mtg/mtg.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
            declarations: [
              AppComponent,
              SubrouteComponent,
              HomeComponent,
              BlockchainsComponent,
              LandingComponent,
              ProjectsComponent,
              MtgComponent,
              FooterComponent
            ],
            imports: [
              BrowserModule,
              FormsModule,
              HttpModule,
              RouterModule.forRoot(ROUTES)
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule { }
