import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Observable} from "rxjs";
import {AuthResponseData} from "../../shared/auth-response";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    logIn = true;
    isLoading = false;
    error = '';
    AuthObservable: Observable<AuthResponseData>

    constructor(private auth: AuthService) {
    }

    ngOnInit(): void {
    }

    onLogin(f: NgForm) {
        if (!f.valid) {
            return;
        }
        this.isLoading = true

        const email = f.value.email;
        const password = f.value.password;
        this.error = ''
        if (this.logIn) {
            this.AuthObservable = this.auth.login(email, password)
        } else {
            this.AuthObservable = this.auth.signup(email, password)
        }
        this.AuthObservable.subscribe({
            next: (responseData) => {
                console.log(responseData)
                this.isLoading = false
                f.reset()
            },
            error: (errorMessage) => {
                this.error = errorMessage;
                this.isLoading = false
            }
        })

    }

    signupMode() {
        this.logIn = !this.logIn
    }
}
