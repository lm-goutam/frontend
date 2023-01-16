import { TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:'',
  
})

export class AppComponent {
  title = 'Advartising';
  myimage:string = "assets/img"


  constructor()
  {
    setTimeout(()=>
    {
      this.title="Templetes";
    },2000)
  }
}

