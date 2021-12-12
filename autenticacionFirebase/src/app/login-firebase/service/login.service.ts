import { Injectable } from '@angular/core';
import { firebaseConfig } from 'src/environments/firebase';
import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp(firebaseConfig);


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  async signin(email: string, password: string): Promise<string> {
    let emailRegistrado;
    var auth = firebase.auth();
    await auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        emailRegistrado = userCredential.user.email;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      return emailRegistrado;
  }

  async login(email: string, password: string): Promise<string> {
    let emailLoggeado;
    var auth = firebase.auth();
    await auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential)
        emailLoggeado = userCredential.user.email;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      return emailLoggeado;
  }
  
  exitLogin(): string {
    var auth = firebase.auth();
    auth.signOut();
    return undefined;
  }

  stateListener(): void {
    var auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
      } else {
        // User is signed out
        // ...
      }
    });
  }
}
