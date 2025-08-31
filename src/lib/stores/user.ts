import { writable } from 'svelte/store';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  joinDate: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
}

const defaultUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  bio: 'Full-stack developer passionate about creating amazing user experiences. Love working with modern web technologies.',
  location: 'San Francisco, CA',
  joinDate: '2023-01-15',
  stats: {
    posts: 42,
    followers: 1234,
    following: 567
  }
};

export const userStore = writable<User>(defaultUser);