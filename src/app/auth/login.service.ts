import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth:AngularFireAuth) {
    
   }
  
  login(){
    console.log('Redirecting to google login provider');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider);
  }

  getLoggedUser(){
    return this.afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
