import {createSelector} from '@ngrx/store';
import {AppState} from '../../app.state';

export const selectUsersState = (state: AppState) => state.users;

export const selectUsers = createSelector(
    selectUsersState,
    (state) => state.users || [] // Default to empty array if undefined
);

export const selectLoading = createSelector(
    selectUsersState,
    (state) => state.loading || false // Default to false if loading is undefined
);

export const selectPagination = createSelector(
    selectUsersState,
    (state) => state.pagination || { totalPages: 0, perPage: 0, total: 0 } // Provide default values
);

export const selectCurrentPage = createSelector(
    selectUsersState,
    (state) => state.currentPage || 1 // Default to page 1 if currentPage is undefined
);

export const selectCurrentState = createSelector(
    selectUsersState,
    (state) => state
);
