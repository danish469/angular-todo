import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from "../material/material.module";

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, MaterialModule],
  declarations: []
})
export class TodoModule {}
