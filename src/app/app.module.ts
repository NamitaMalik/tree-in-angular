import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { SubMenuItemComponent } from './sub-menu-item/sub-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SubMenuComponent,
    SubMenuItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
