import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    message = 'Some message to display!'
    name = ''
   
constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.message)
    this.name=this.route.snapshot.params['name']
    console.log(this.name)
  }

}

export class Demo1 {

  //Created to play around the components of the class

}

export class Demo2{


}