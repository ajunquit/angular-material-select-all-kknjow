import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {
  MatListModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatCheckboxModule, MatIconModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { SelectCheckAllComponent } from "./select-check-all.component";
import { MatCardModule } from "@angular/material";
import { MatExpansionModule } from "@angular/material/expansion";
import { ErrorHandler } from "@angular/core";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,MatIconModule
  ],
  declarations: [AppComponent, SelectCheckAllComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
