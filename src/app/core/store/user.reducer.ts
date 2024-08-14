import { createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUserDetailsSuccess } from './user.actions';

export interface UserState {
    users: { [key: number]: User[] };
    usersCached: User[];
    selectedUser: User | null;
    error: any;
    loading: boolean;
    pagination: {
        totalPages: number;
        perPage: number;
        total: number;
    };
    currentPage: number;
}

export const initialState: UserState = {
    users: {},
    usersCached: [],
    pagination: { totalPages: 0, perPage: 0, total: 0 },
    selectedUser: null,
    error: null,
    loading: false,
    currentPage: 1
};

export const userReducer = createReducer(
    initialState,
    on(loadUsers, (state) => ({
        ...state,
        loading: true
    })),
    on(loadUsersSuccess, (state, { users, totalPages, currentPage }) => ({
        ...state,
        users: {
            ...state.users,
            [currentPage]: users
        },
        loading: false,
        pagination: {
            ...state.pagination,
            totalPages
        },
        currentPage
    })),
    on(loadUsersFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),
    on(loadUserDetailsSuccess, (state, { user }) => ({
        ...state,
        selectedUser: user
    }))
);
