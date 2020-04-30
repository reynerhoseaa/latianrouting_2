import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './button/button.component';
import { HasilComponent } from './hasil/hasil.component';

import { Routes, RouterModule } from '@angular/router'
import { Router } from '@angular/router'

const ROUTES: Routes=[
  {path: 'button', component: ButtonComponent},
  {path: 'hasil', component: HasilComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, ButtonComponent, HasilComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(private router: Router){ }

  Kalkulator(){
    this.router.navigate(['/button']);
  }
  Hasil(){
    this.router.navigate(['/hasil']);
  }
  Back(){
    this.router.navigate(['/button']);
  }
}
