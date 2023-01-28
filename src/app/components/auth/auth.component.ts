import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  logIn = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(f: NgForm) {
    console.log(f.value)
    f.reset()
  }

  signupMode() {
    this.logIn = !this.logIn
  }
}
