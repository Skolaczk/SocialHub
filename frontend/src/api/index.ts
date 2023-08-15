import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

export const endpoints = {
  users: {
    base: 'users',
    me: 'users/me',
  },
  comments: 'comments',
  posts: 'posts',
  auth: {
    signIn: 'auth/sign-in',
    signUp: 'auth/sign-up',
  },
};
