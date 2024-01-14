import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TicketTitleEditComponent } from './components/ticket-title-edit/ticket-title-edit.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsComponent } from './components/charts/charts.component';
import { QRCodeModule } from 'angularx-qrcode';
import {HttpClientModule} from '@angular/common/http'
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FilterPipe } from './core/pipes/filter.pipe';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,

    CardComponent,
    TableComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TicketTitleEditComponent,
   
    ChartsComponent,
        FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    QRCodeModule,
    HttpClientModule,
    TooltipModule,
    TableModule,
    AvatarModule,
    PaginatorModule,
    AvatarGroupModule,
    InputTextModule,
    InputSwitchModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
