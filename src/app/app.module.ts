import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultComponent,
    // Components, Directives, and Pipes
  ],
  imports: [
    BrowserModule,
    UserInputModule,
    // Modules
  ],
  providers: [
    // Services
  ],
  bootstrap: [
    AppComponent,
    // Components
  ],
})
export class AppModule {}
