import {Component} from "@angular/core"

@Component({
	moduleId :module.id,
	selector:"my-home",
	templateUrl:"./home.component.html"
})

export class HomeComponent{
	private message : String;
	constructor(){
		this.message = "im frm home inside constructor";
	}
}