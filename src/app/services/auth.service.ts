import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(public afAuth: AngularFireAuth) { }

	// Sign in with Google
	googleAuth(): Promise<void> {
		return this.authLogin(new auth.GoogleAuthProvider());
	}

	// Auth logic to run auth providers
	authLogin(provider): Promise<void> {
		return this.afAuth.auth.signInWithPopup(provider)
			.then((result) => {
				console.log('You have been successfully logged in!');
			}).catch((error) => {
				console.log(error);
		});
	}
}
