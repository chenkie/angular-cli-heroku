import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { BlockchainsComponent } from './blockchains/blockchains.component';
import { SubrouteComponent } from './subroute/subroute.component';
import { ProjectsComponent } from './projects/projects.component';
import { MtgComponent } from './mtg/mtg.component';

export const ROUTES: Routes = [
  { path: '', component: LandingComponent  },
  { path: 'landing', component: LandingComponent },
  { path: 'blockchains', component: BlockchainsComponent },
  { path: 'subroute', component: SubrouteComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'magicTheGathering', component: MtgComponent }
];

// { path: 'landing/', component: LandingComponent },
