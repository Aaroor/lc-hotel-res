import { Component, OnInit } from '@angular/core';
import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth'
import { LoginService } from './auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user : firebase.User;
  constructor(private afAuth:AngularFireAuth,private service:LoginService ){

  }

  ngOnInit(): void {
    this.service.getLoggedUser()
    .subscribe(
      user => {
        console.log(user);
        this.user=user;
      }
    )
  }

}
