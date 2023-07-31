import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

export const endpoints = {
  users: {
    base: 'users',
    me: 'users/me',
    random: 'users/random',
  },
  posts: 'posts',
  auth: {
    signIn: 'auth/sign-in',
    signUp: 'auth/sign-up',
  },
};
