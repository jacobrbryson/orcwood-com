import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GamePageRoutingModule } from './game-routing.module';
import { GamePage } from './game.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NightlyBuildsComponent } from 'src/app/pages/game/components/nightly-builds/nightly-builds.component';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { ProjectManagerComponent } from './components/project-manager/project-manager.component';
import { CreditsComponent } from './components/credits/credits.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { ResourceLinksComponent } from './components/resource-links/resource-links.component';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    SharedModule
  ],
  declarations: [
    GamePage,
    NightlyBuildsComponent,
    ContributorsComponent,
    ProjectManagerComponent,
    CreditsComponent,
    SlideShowComponent,
    IframeComponent,
    ResourceLinksComponent,
    DescriptionComponent
  ]
})
export class GamePageModule {}
