import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {AuthResponseData} from "../auth-response";
import {User} from "../user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user = new BehaviorSubject<User>(null)

    constructor(private http: HttpClient) {
    }

    signup(email: string, password: string) {
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?' +
                'key=AIzaSyCykHq0COQWv9OnJoRRMEYweB1abwf3gJY', {
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
                'key=AIzaSyCykHq0COQWv9OnJoRRMEYweB1abwf3gJY', {
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
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000)
        const user = new User(resData.email, resData.localId, resData.idToken, expirationDate)
        this.user.next(user)
    }
}
