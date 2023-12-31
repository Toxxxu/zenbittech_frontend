import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../models/User';
import { LoginUserRequest } from '../dto/login-user-request.dto';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://busy-teal-cuttlefish-garb.cyclic.app/auth'
  }),
  endpoints: (build) => ({
    login: build.mutation<User, LoginUserRequest>({
      query: (loginUserRequest) => ({
        url: "/login",
        method: "POST",
        body: loginUserRequest,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
