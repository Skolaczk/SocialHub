import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

export const endpoints = {
  users: 'users',
  posts: 'posts',
  auth: {
    signIn: 'auth/sign-in',
    signUp: 'auth/sign-up',
  },
};
