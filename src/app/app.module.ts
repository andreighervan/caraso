import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SellACarModule } from './sell-a-car/sell-a-car.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SellACarModule,
    HomeModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
