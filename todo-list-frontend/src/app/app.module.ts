import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {FormsModule} from "@angular/forms";
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import { ComponentNameComponent } from './component-name/component-name.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ProgressBarComponent,
    ComponentNameComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
