import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import { usersApi } from '../apis/users.api';
import { authApi } from '../apis/auth.api';
import auth from '../slices/auth.slice';
import { flatsApi } from '../apis/flats.api';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [flatsApi.reducerPath]: flatsApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(usersApi.middleware)
    .concat(authApi.middleware)
    .concat(flatsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
