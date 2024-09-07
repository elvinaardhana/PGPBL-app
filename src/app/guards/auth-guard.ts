import { Injectable } from '@angular/core';
import { CanLoad, GuardResult, MaybeAsync, Route, Router, UrlSegment } from '@angular/router';
import { AppState } from 'src/store/AppState';
import { Observable, of, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad{

  constructor(private store: Store<AppState>, private router: Router) { }

  canLoad(): Observable<boolean> {
    return this.store.select('login').pipe(
      take(1),
      switchMap(loginState =>{
        if(loginState.isLoggedIn){
          return of(true);
        }
        this.router.navigateByUrl('login');
        return of(false);
      })
    )
  }
}
