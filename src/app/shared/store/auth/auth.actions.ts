import {Action} from "@ngrx/store";
import {User} from "../../user.model";

export const LOGIN = '[auth] LOGIN';
export const LOGOUT = '[auth] LOGOUT';

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public user : User) {}
}

export class Logout implements Action {
    readonly type = LOGOUT;
    constructor(){}
}

export type AuthActions =
    Login | Logout
