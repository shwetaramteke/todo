import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    message = 'Some message to display!'
   
constructor(){}

  ngOnInit(): void {
    console.log(this.message)
    
  }

}

export class Demo1 {

  //Created to play around the components of the class

}

export class Demo2{


}