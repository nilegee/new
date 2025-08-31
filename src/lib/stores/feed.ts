import { writable } from 'svelte/store';

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
}

const defaultPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      username: '@sarahchen'
    },
    content: 'Just finished building an amazing dashboard with SvelteKit! The widget system is incredibly flexible and fun to work with. 🚀',
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '2024-01-15T10:30:00Z',
    likes: 24,
    comments: 5,
    shares: 3,
    liked: false
  },
  {
    id: '2',
    author: {
      name: 'Mike Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      username: '@mikedev'
    },
    content: 'The new widget architecture allows for incredible customization. Users can now create their perfect workspace! What widgets would you like to see next?',
    timestamp: '2024-01-15T09:15:00Z',
    likes: 18,
    comments: 8,
    shares: 2,
    liked: true
  },
  {
    id: '3',
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      username: '@emmathompson'
    },
    content: 'Love how responsive and smooth the drag-and-drop functionality is. The attention to detail in the animations makes it feel so polished! ✨',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '2024-01-15T08:45:00Z',
    likes: 31,
    comments: 12,
    shares: 7,
    liked: false
  }
];

export const feedStore = writable<Post[]>(defaultPosts);

export function toggleLike(postId: string) {
  feedStore.update(posts => 
    posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          }
        : post
    )
  );
}