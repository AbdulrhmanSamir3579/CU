import { createAction, props } from "@ngrx/store";
import { User } from '../interfaces/user';

export const loadUsers = createAction('[User List] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: User[], totalPages: number, currentPage: number }>());
export const loadUsersFailure = createAction('[User List] Load Users Failure', props<{ error: any }>());

export const loadUserDetails = createAction('[User Details] Load User Details', props<{ id: number }>());
export const loadUserDetailsSuccess = createAction('[User Details] Load User Details Success', props<{ user: User }>());
export const loadUserDetailsFailure = createAction('[User Details] Load User Details Failure', props<{ error: any }>());
