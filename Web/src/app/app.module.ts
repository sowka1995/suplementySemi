import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SupplementService } from './services/supplementService';
import { SupplementComponent } from './supplement/supplement.component';
import { SupplementAddComponent } from './supplement-add/supplement-add.component';
import { SupplementInfoComponent } from './supplement-info/supplement-info.component';
import { FilterNamePipe } from './pipes/filterNamePipe';
import { RatingModule } from 'ngx-rating';
import { SmoothScrollToDirective, SmoothScrollDirective } from 'ng2-smooth-scroll';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'supplement', component: SupplementComponent, children: [
    {path: 'add', component: SupplementAddComponent},
    {path: 'info/:name', component: SupplementInfoComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SupplementComponent,
    SupplementAddComponent,
    SupplementInfoComponent,
    FilterNamePipe,
    SmoothScrollToDirective,
    SmoothScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RatingModule,
    RouterModule.forRoot(routes),
	ImageUploadModule.forRoot()
  ],
  providers: [SupplementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
