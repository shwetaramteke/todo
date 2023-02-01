//This class is the bussiness logic of the view login.component.html.All the related logic will be written here

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'shweta' //This is a default username,i.e if we want to show a default username we can define it here,otherwise leave empty
  password = ''
  errorMessage = 'Invalid Credentials !!'
  invalidLogin = false

  handleLogin(){

      if (this.username === 'shweta' && this.password === 'ashish') {
          this.invalidLogin = false
          console.log('is invalid? - '+this.invalidLogin)
      } else {
          this.invalidLogin = true
          console.log('is invalid? - '+this.invalidLogin)
      }

    //console.log(this.username)
  }
}
