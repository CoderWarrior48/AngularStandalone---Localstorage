import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,LocalStorageComponent,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
