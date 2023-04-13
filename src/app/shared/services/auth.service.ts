import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {AuthResponseData} from "../auth-response";
import {User} from "../user.model";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user = new BehaviorSubject<User>(null)
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {
    }

    signup(email: string, password: string) {
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?' +
                'key=' + environment.firebaseAPIKey, {
                email: email,
                password: password,
                returnSecureToken: true,
            }).pipe(
                catchError((errorRes) => {
                    return this.handleError(errorRes)
                }),
                tap((resData: AuthResponseData) => {
                    this.handleUserAuth(resData)
                })
            )
    }

    login(email: string, password: string) {
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?' +
                'key=' + environment.firebaseAPIKey, {
                email: email,
                password: password,
                returnSecureToken: true,
            }).pipe(
                catchError((errorRes) => {
                    return this.handleError(errorRes)
                }),
                tap((resData: AuthResponseData) => {
                    this.handleUserAuth(resData)
                })
            )
    }

    logout() {
        this.user.next(null);
        localStorage.removeItem("userData");
        this.router.navigate(['/auth']);
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer)
        }
        this.tokenExpirationTimer = null;
    }

    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.localId,
            userData.idToken
        );
        if (loadedUser.token) {
            this.user.next(loadedUser);
        }
    }

    autoLogout(expirationTime) {
        this.tokenExpirationTimer = setTimeout(() => {this.logout()}, expirationTime)
    }

    private handleError(errorRes) {
        let errorMessage = 'An unknown error occurred.'
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => errorMessage)
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email is not registered. Try signing up';
                break;
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists. Try logging in';
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = 'Password sign-up is disabled for this project';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Password failed. Please try again';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'We have blocked all requests from this device due ' +
                    'to unusual activity. Try again later.';
                break;
        }
        return throwError(() => errorMessage)
    }

    private handleUserAuth(resData) {
        const user = new User(resData.email, resData.localId, resData.idToken)
        localStorage.setItem("userData", JSON.stringify(resData));
        this.user.next(user)
    }
}
