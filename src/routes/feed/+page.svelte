<script lang="ts">
  import { PenSquare, Image, Smile } from 'lucide-svelte';
  import PostCard from '$lib/components/Feed/PostCard.svelte';
  import { feedStore } from '$lib/stores/feed';
  
  let newPostContent = '';
  
  function createPost() {
    if (newPostContent.trim()) {
      const newPost = {
        id: Date.now().toString(),
        author: {
          name: 'Alex Johnson',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
          username: '@alexjohnson'
        },
        content: newPostContent.trim(),
        timestamp: new Date().toISOString(),
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false
      };
      
      feedStore.update(posts => [newPost, ...posts]);
      newPostContent = '';
    }
  }
</script>

<svelte:head>
  <title>Feed</title>
</svelte:head>

<div class="max-w-2xl mx-auto space-y-6">
  <!-- Create post -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div class="flex items-start space-x-4">
      <img
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Your avatar"
        class="w-12 h-12 rounded-full object-cover"
      />
      <div class="flex-1">
        <textarea
          bind:value={newPostContent}
          placeholder="What's on your mind?"
          class="w-full resize-none border-0 focus:outline-none focus:ring-0 text-lg placeholder-gray-500"
          rows="3"
        ></textarea>
        
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div class="flex items-center space-x-4">
            <button class="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <Image class="w-5 h-5" />
              <span class="text-sm">Photo</span>
            </button>
            <button class="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <Smile class="w-5 h-5" />
              <span class="text-sm">Emoji</span>
            </button>
          </div>
          
          <button
            on:click={createPost}
            disabled={!newPostContent.trim()}
            class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <PenSquare class="w-4 h-4" />
            <span>Post</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Feed posts -->
  <div class="space-y-6">
    {#each $feedStore as post (post.id)}
      <PostCard {post} />
    {/each}
  </div>
</div>