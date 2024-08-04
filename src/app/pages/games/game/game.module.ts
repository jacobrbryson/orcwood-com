import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GamePageRoutingModule } from './game-routing.module';
import { GamePage } from './game.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NightlyBuildsComponent } from 'src/app/pages/games/game/components/nightly-builds/nightly-builds.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    SharedModule
  ],
  declarations: [GamePage,NightlyBuildsComponent]
})
export class GamePageModule {}
