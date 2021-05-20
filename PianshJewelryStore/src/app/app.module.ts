import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownDirective } from './Shared/dropdown.directive';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './SimpleComponents/header/header.component';
import { HomeComponent } from './SimpleComponents/home/home.component';
import { VeiwComponent } from './veiw/veiw.component';
import { VeiwElementComponent } from './veiw/veiw-element-set/veiw-element.component';
import { SearchPipe } from './Shared/search.pipe';
import { LoginComponent } from './SimpleComponents/login/login.component';
import { AppPasswordDirective } from './Shared/app-password.directive';
import { LostComponent } from './SimpleComponents/lost/lost.component';
import { SitemapComponent } from './SimpleComponents/sitemap/sitemap.component';
import { EditComponent } from './edit/edit.component';
// import { FilterPipe } from './Shared/filter.pipe';

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
    // SafeHtmlPipePipe,
    // SafePipe,
    LoginComponent,
    AppPasswordDirective,
    LostComponent,
    SitemapComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
