import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/users.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUserDetails, loadUserDetailsSuccess, loadUserDetailsFailure } from './user.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadUsers),
        switchMap(action =>
            this.userService.getUsers(action.page).pipe(
                map(response => loadUsersSuccess({
                    users: response.data,
                    totalPages: response.total_pages,
                    currentPage: action.page
                })),
                catchError(error => of(loadUsersFailure({ error })))
            )
        )
    ));

    // loadUserDetails$ = createEffect(() => this.actions$.pipe(
    //     ofType(loadUserDetails),
    //     switchMap(action =>
    //         this.userService.getUserById(action.id).pipe(
    //             map(response => loadUserDetailsSuccess({ user: response })),
    //             catchError(error => of(loadUserDetailsFailure({ error })))
    //         )
    //     )
    // ));


    constructor(private actions$: Actions, private userService: UserService) {}
}
