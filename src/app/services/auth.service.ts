import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserOptions } from '../interfaces/user-options';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user:UserOptions) {

  }

  register(user: UserOptions ) {
    return this.afa.createUserWithEmailAndPassword(user.username, user.password)
  }
}
