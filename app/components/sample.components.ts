import {Component} from '@angular/core'

@Component({
	moduleId :module.id,
	selector:"my-sample",
	templateUrl:"sample.html"

})

export class SampleComponent{
	 private name : string;
	 private imageUrl :string;
	 private realName :string;
	 private showHeader :boolean;
	 private items :string[];
	 private price :number;
	 constructor(){
	 	this.name ="usha",
	 	this.imageUrl = './app/components/images/Fall-Nature-Background-Pictures.jpg'
	 	this.realName ="usha";
	 	this.showHeader = true;
	 	this.price = 1500;
	 	this.items = ["fridge","ac","oven","washing machine","cooler"]
	 }

	 runMe(name:string){
	 	console.log("im clicking the button: : : "+name)
	 }
	 display(events : any){
	 	console.log(events.target.value)
	 }
}