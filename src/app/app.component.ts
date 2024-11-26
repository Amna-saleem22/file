import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface employes{
  name: string;
  age: string;
};
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAppLearning';


 logged:boolean = false;

login() :void{
  if(this.logged){
    
  }
   
}
 logout() :void{
  this.logged =!this.logged;
 }


 namee:string = "Abdullah";
company:employes[] = [
{name:"amna",age:"55"},
{name:"hina",age:"38"},
{name:"ayesha",age:"45"},
{name:"hiba",age:"25"},
{name:"huma",age:"35"},
];
}