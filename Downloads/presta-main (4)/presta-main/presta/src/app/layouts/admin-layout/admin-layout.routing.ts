import { UpdateProfilComponent } from './../../pages/update-profil/update-profil.component';
import { NotifPrestatireComponent } from "./../../pages/notif-prestatire/notif-prestatire.component";
import { ProfilComponent } from "./../../pages/profil/profil.component";
import { Routes } from "@angular/router";
import { AddProfilComponent } from './../../pages/add-profil/add-profil.component';

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { CandidaturesComponent } from "src/app/pages/candidatures/candidatures.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "candidature", component: CandidaturesComponent },
  { path: "profil", component: ProfilComponent },
  { path: "notification", component: NotifPrestatireComponent },
  { path: "addprofil", component: AddProfilComponent },
  { path: 'update/:id', component: UpdateProfilComponent },

];
