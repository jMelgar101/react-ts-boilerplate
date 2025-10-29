export const API_BASE_URL = 'https://api.example.com';

export const API_ENDPOINTS = {
  USERS: '/users',
  USER_BY_ID: (id: number) => `/users/${id}`,
} as const;

