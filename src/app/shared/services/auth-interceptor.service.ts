import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {exhaustMap, take} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private auth: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        return this.auth.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req)
                } else {
                    const modifiedReq = req.clone({
                        params: new HttpParams().set('auth', user.token)
                    })
                    return next.handle(modifiedReq)
                }
            })
        )

    }
}
