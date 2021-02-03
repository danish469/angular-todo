import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodoComponent } from "./todo/todo.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule],
  declarations: [AppComponent, HelloComponent, TodoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}