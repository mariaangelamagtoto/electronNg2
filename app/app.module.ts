import {
  NgModule
} from '@angular/core'
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';
/*components*/
import {
  AppComponent
} from './app.component';
import {
  IndexComponent
} from './components/index/index.component';
import {
  PageNotFoundComponent
} from './components/404/page.not.found.component';
import {
  GameSelectionComponent
} from './components/selection/game.selection.component';
import {
  GameSelectionModule
} from './components/selection/game.selection.module.component';
/* routing */
import {
  rootRouting
} from './components/root.route.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    rootRouting,
    GameSelectionModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
