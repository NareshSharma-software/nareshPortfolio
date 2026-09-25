import { apiSlice } from '../apiSlice';

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendContactMessage: builder.mutation({
      query: (data) => ({
        url: '/api/contact',
        method: 'POST',
        body: data,
      }),
       invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useSendContactMessageMutation,
} = contactApiSlice;