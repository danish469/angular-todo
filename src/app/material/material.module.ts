import { NgModule } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { MatButtonModule, } from "@angular/material/button";
const MaterialComponents = [MatButtonModule, MatButtonToggleModule,];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
