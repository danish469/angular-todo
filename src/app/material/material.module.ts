import { NgModule } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
// import {} from "@angular/material/button";
import { MatButtonModule, MatIconModule } from "@angular/material/button";
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
