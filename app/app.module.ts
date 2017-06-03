import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser"
import {FormsModule} from "@angular/forms"
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from "./components/about/about.component"
import {AppComponent} from './app.component'
import {SampleComponent} from "./components/sample.components"
@NgModule({
	imports :[BrowserModule,FormsModule],
	declarations : [AppComponent,HomeComponent,AboutComponent,SampleComponent],
	bootstrap:[AppComponent]


})

export class AppModule{

}