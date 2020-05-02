import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CanActivateService} from './services/guards/can-activate.service';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'first', component: FirstComponent, canActivate: [CanActivateService], canActivateChild: [], canDeactivate: [CanActivateService]},
  {path: 'second', component: SecondComponent},
  // {path: 'second', component: SecondComponent, outlet: 'xxx'}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
