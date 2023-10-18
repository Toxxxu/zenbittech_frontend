import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../models/User';
import { CreateUserRequest } from '../dto/create-user-request.dto';

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://busy-teal-cuttlefish-garb.cyclic.app/users`
  }),
  endpoints: (build) => ({
    createUser: build.mutation<User, CreateUserRequest>({
      query: (createUserRequest) => ({
        url: '/',
        method: 'POST',
        body: createUserRequest,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = usersApi;
