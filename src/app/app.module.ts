import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EquiposComponent } from './equipos/equipos.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { FixtureComponent } from './fixture/fixture.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    FixtureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
