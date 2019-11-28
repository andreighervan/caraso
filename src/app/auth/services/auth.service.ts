import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor() { }

  doFacebookLogin() {
  }

  doGoogleLogin() {
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    });
  }

}
