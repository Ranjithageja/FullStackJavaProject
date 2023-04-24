import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username : any, password : any)  {
    if (username === "Ranjitha" && password === "1234") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
    /*authenticate(username : any, password :any)  {
      if (password! === "1234" && username === "Ranjitha") {
        var emessage='wrong password'
      }
        else if(password=="1234" && username! =="Ranjitha"){
          var emessage='wrongname'
        }
        }*/
      
      }

      isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
}

}