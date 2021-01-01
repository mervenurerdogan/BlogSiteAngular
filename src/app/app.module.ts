import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MainModule} from './pages/main.module';//Anasayfa componentlerin olduğu modül
import{AdminModuleModule} from './adminPages/admin-module.module'



import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent









  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,MainModule,AdminModuleModule],
  exports:[AdminModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
