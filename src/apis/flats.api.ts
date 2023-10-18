import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Flat } from "../models/Flat";

export const flatsApi = createApi({
  reducerPath: 'flatsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/flats'
  }),
  endpoints: (build) => ({
    flats: build.mutation<Flat[], void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useFlatsMutation } = flatsApi;
