import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { recoverPasswordFail, recoverPassword, recoverPasswordSuccess, login, loginSuccess, loginFail } from "./login.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private authService: AuthService){

    }

    recoverPassword$ = createEffect(() => this.actions$.pipe(
        ofType(recoverPassword),
        switchMap((payload: {email: string}) => this.authService.recoverEmailPassword(payload.email).pipe(
            map(() => recoverPasswordSuccess()),
            catchError(error => of(recoverPasswordFail({error})))
        ))
        
    ))
     
    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        switchMap((payload: {email: string, password: string})=>
        this.authService.login(payload.email, payload.password).pipe(
            map(user => loginSuccess({user})),
            catchError(error => of(loginFail({error})))
        ))
    ))
}