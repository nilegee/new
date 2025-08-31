<script lang="ts">
  import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-svelte';
  import { formatDistanceToNow } from 'date-fns';
  import type { Post } from '$lib/stores/feed';
  import { toggleLike } from '$lib/stores/feed';
  
  export let post: Post;
  
  function handleLike() {
    toggleLike(post.id);
  }
  
  function formatTime(timestamp: string) {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  }
</script>

<article class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
  <!-- Post header -->
  <div class="p-6 pb-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          class="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 class="font-semibold text-gray-900">{post.author.name}</h3>
          <p class="text-sm text-gray-500">{post.author.username} • {formatTime(post.timestamp)}</p>
        </div>
      </div>
      <button class="btn-icon">
        <MoreHorizontal class="w-5 h-5" />
      </button>
    </div>
  </div>
  
  <!-- Post content -->
  <div class="px-6 pb-4">
    <p class="text-gray-800 leading-relaxed">{post.content}</p>
  </div>
  
  <!-- Post image -->
  {#if post.image}
    <div class="px-6 pb-4">
      <img
        src={post.image}
        alt="Post content"
        class="w-full h-64 object-cover rounded-lg"
      />
    </div>
  {/if}
  
  <!-- Post actions -->
  <div class="px-6 py-4 border-t border-gray-100">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <button
          on:click={handleLike}
          class="flex items-center space-x-2 text-sm font-medium transition-colors duration-200 {
            post.liked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
          }"
        >
          <Heart class="w-5 h-5 {post.liked ? 'fill-current' : ''}" />
          <span>{post.likes}</span>
        </button>
        
        <button class="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200">
          <MessageCircle class="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
        
        <button class="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200">
          <Share class="w-5 h-5" />
          <span>{post.shares}</span>
        </button>
      </div>
    </div>
  </div>
</article>