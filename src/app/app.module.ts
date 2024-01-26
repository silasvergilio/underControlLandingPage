import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AwardsComponent } from './awards/awards.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    AwardsComponent,
    HomeComponent,
    SobrenosComponent,
    FirstComponent,
  ],
  imports: [
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer){
        this.matIconRegistry.addSvgIcon(
          "youtube",
          this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/youtube.svg"),
        )
          this.matIconRegistry.addSvgIcon(
          "instagram",
          this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/instagram.svg"),
        );
    }
}