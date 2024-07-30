import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { GamesComponent } from "./games/games.component";
import { TeamComponent } from "./team/team.component";
import { SafePipe } from "../utils/safe.pipe";

@NgModule({
	imports:[
		IonicModule,
		CommonModule
	],
  declarations: [
		NavComponent,
		SectionHeaderComponent,
		GamesComponent,
		TeamComponent,
		SafePipe
	],
	providers:[],
	exports:[
		NavComponent,
		SectionHeaderComponent,
		GamesComponent,
		TeamComponent,
		SafePipe
	]
})
export class SharedModule {}