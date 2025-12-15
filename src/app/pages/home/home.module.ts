import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { Winter2026BannerComponent } from './components/banner/2026-winter/winter-banner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage, 
    BannerComponent,
    Winter2026BannerComponent]
})
export class HomePageModule {}
