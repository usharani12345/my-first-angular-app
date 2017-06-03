import {Component} from '@angular/core'
import {HomeComponent} from './components/home/home.component'

import {AboutComponent} from "./components/about/about.component"
import {SampleComponent} from "./components/sample.components"


@Component({
	selector:'my-app',
	template:`<div *ngIf="dispalyValue"><h1>my angular app</h1>
	<my-home></my-home>
	<about></about>
	<my-sample></my-sample>
			  </div>`
})

export class AppComponent{ 
	private dispalyValue : boolean
	constructor(){
		this.dispalyValue =true;
	}
}