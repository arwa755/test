
import { Component } from '@angular/core';
import { JwPaginationModule } from 'jw-angular-pagination';
@NgModule({
  imports: [
    BrowserModule,
    JwPaginationModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled3';
}
