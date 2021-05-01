import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { VeiwComponent } from './veiw/veiw.component';
import { VeiwElementComponent } from './veiw/veiw-element-set/veiw-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './shared/search.pipe';
// import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    AddComponent,
    HeaderComponent,
    HomeComponent,
    VeiwComponent,
    VeiwElementComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
